"use client";

import {
  type ReactNode,
  useEffect,
  useRef,
  Component,
  type ReactNode as ReactNodeType,
} from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convexUrl = import.meta.env.VITE_CONVEX_URL;

// We need a client instance for the Provider context to exist, even if disabled.
// Using a dummy URL if missing, but we MUST skip queries in components.
const convex = new ConvexReactClient(
  convexUrl || "https://disabled.convex.local",
  {
    // Skip deployment URL check when using dummy URL
    ...(!convexUrl && { skipConvexDeploymentUrlCheck: true }),
  },
);

// Error Boundary to catch and handle React errors gracefully
class ConvexErrorBoundary extends Component<
  { children: ReactNodeType },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNodeType }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Check if this is a Convex 401 error
    const errorMessage = error.message || String(error);
    const isConvex401Error =
      (errorMessage.includes("401") || errorMessage.includes("Unauthorized")) &&
      (errorMessage.includes(convexUrl || "") ||
        errorMessage.includes("convex") ||
        errorMessage.includes("Convex"));

    // Don't show error boundary for 401 errors during reconnection
    if (isConvex401Error) {
      return { hasError: false }; // Don't trigger error boundary
    }
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const errorMessage = error.message || String(error);
    const isConvex401Error =
      (errorMessage.includes("401") || errorMessage.includes("Unauthorized")) &&
      (errorMessage.includes(convexUrl || "") ||
        errorMessage.includes("convex") ||
        errorMessage.includes("Convex"));

    if (!isConvex401Error) {
      console.error("Error caught by boundary:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Only show error UI for non-401 errors
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-gray-400 mb-4">
              Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const isReconnectingRef = useRef(false);
  const originalFetchRef = useRef<typeof fetch | null>(null);

  useEffect(() => {
    if (!convexUrl) {
      console.warn("Convex URL missing. App running in offline mode.");
      return;
    }

    // Intercept fetch to handle 401 errors gracefully
    originalFetchRef.current = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetchRef.current!(...args);

        // Check if this is a Convex request with a 401 error during reconnection
        const url =
          typeof args[0] === "string"
            ? args[0]
            : (args[0] as any)?.url || (args[0] as any)?.href || "";
        const isConvexRequest = url.includes(convexUrl);

        if (
          isConvexRequest &&
          response.status === 401 &&
          isReconnectingRef.current
        ) {
          // During reconnection, return a response that won't break the app
          // Create a mock response that indicates the request should be retried
          if (import.meta.env.DEV) {
            console.debug(
              "Intercepted Convex 401 during reconnection (expected on mobile)",
            );
          }
          // Return the response but mark it as handled - Convex will retry
          return response;
        }

        return response;
      } catch (error) {
        // Re-throw non-network errors
        throw error;
      }
    };

    // Handle visibility changes (when app comes back from background on mobile)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // App came back to foreground - mark as reconnecting
        isReconnectingRef.current = true;

        // Convex will automatically reconnect
        // Reset the reconnecting flag after a delay
        setTimeout(() => {
          isReconnectingRef.current = false;
        }, 10000); // 10 seconds to allow for reconnection

        if (import.meta.env.DEV) {
          console.debug("App visible - Convex will reconnect if needed");
        }
      } else {
        // App went to background
        isReconnectingRef.current = false;
      }
    };

    // Handle page focus (another indicator of app coming back)
    const handleFocus = () => {
      isReconnectingRef.current = true;
      setTimeout(() => {
        isReconnectingRef.current = false;
      }, 10000);

      if (import.meta.env.DEV) {
        console.debug("Page focused - Convex connection should be active");
      }
    };

    // Handle unhandled promise rejections (common source of 401 errors)
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const errorMessage =
        typeof reason === "string"
          ? reason
          : reason?.message || String(reason) || "";

      const isConvex401Error =
        isReconnectingRef.current &&
        (errorMessage.includes("401") ||
          errorMessage.includes("Unauthorized")) &&
        (errorMessage.includes(convexUrl) ||
          errorMessage.includes("convex") ||
          errorMessage.includes("Convex"));

      if (isConvex401Error) {
        // Prevent the error from breaking the app
        event.preventDefault();
        if (import.meta.env.DEV) {
          console.debug(
            "Suppressed Convex 401 promise rejection during reconnection (expected on mobile)",
          );
        }
      }
    };

    // Handle global errors
    const handleError = (event: ErrorEvent) => {
      const errorMessage = event.message || String(event.error || "");
      const isConvex401Error =
        isReconnectingRef.current &&
        (errorMessage.includes("401") ||
          errorMessage.includes("Unauthorized")) &&
        (errorMessage.includes(convexUrl) ||
          errorMessage.includes("convex") ||
          errorMessage.includes("Convex"));

      if (isConvex401Error) {
        // Prevent the error from breaking the app
        event.preventDefault();
        if (import.meta.env.DEV) {
          console.debug(
            "Suppressed Convex 401 error during reconnection (expected on mobile)",
          );
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("error", handleError);

    return () => {
      // Restore original fetch
      if (originalFetchRef.current) {
        window.fetch = originalFetchRef.current;
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection,
      );
      window.removeEventListener("error", handleError);
    };
  }, [convexUrl]);

  return (
    <ConvexErrorBoundary>
      <ConvexProvider client={convex}>{children}</ConvexProvider>
    </ConvexErrorBoundary>
  );
}

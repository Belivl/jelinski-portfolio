"use client";

import { type ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convexUrl = import.meta.env.VITE_CONVEX_URL;

// We need a client instance for the Provider context to exist, even if disabled.
// Using a dummy URL if missing, but we MUST skip queries in components.
const convex = new ConvexReactClient(
  convexUrl || "https://disabled.convex.local",
);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  if (!convexUrl) {
    console.warn("Convex URL missing. App running in offline mode.");
  }
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SEO } from "@/components/SEO";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

// Lazy-loaded components
const Home = lazy(() =>
  import("@/pages/Home").then((module) => ({ default: module.Home })),
);
const Gallery = lazy(() =>
  import("@/pages/Gallery").then((module) => ({ default: module.Gallery })),
);
const Blog = lazy(() =>
  import("@/pages/Blog").then((module) => ({ default: module.Blog })),
);
const Projects = lazy(() =>
  import("./pages/Projects").then((module) => ({ default: module.Projects })),
);
const ProjectPost = lazy(() =>
  import("./pages/ProjectPost").then((module) => ({
    default: module.ProjectPost,
  })),
);
const BlogPost = lazy(() =>
  import("@/pages/BlogPost").then((module) => ({ default: module.BlogPost })),
);
const About = lazy(() =>
  import("@/pages/About").then((module) => ({ default: module.About })),
);
const Contact = lazy(() =>
  import("@/pages/Contact").then((module) => ({ default: module.Contact })),
);
const AdminLogin = lazy(() =>
  import("@/pages/AdminLogin").then((module) => ({
    default: module.AdminLogin,
  })),
);
const AdminDashboard = lazy(() =>
  import("@/pages/AdminDashboard").then((module) => ({
    default: module.AdminDashboard,
  })),
);
const PhotoManager = lazy(() =>
  import("@/pages/PhotoManager").then((module) => ({
    default: module.PhotoManager,
  })),
);
const SecurityTests = lazy(() =>
  import("@/pages/SecurityTests").then((module) => ({
    default: module.SecurityTests,
  })),
);
const DatabaseTools = lazy(() =>
  import("@/pages/DatabaseTools").then((module) => ({
    default: module.DatabaseTools,
  })),
);
const GoldButtonDemo = lazy(() =>
  import("@/pages/GoldButtonDemo").then((module) => ({
    default: module.GoldButtonDemo,
  })),
);
const NotFound = lazy(() =>
  import("@/pages/NotFound").then((module) => ({ default: module.NotFound })),
);

// Loading component for Suspense
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background w-full transition-opacity duration-300">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin shadow-lg"></div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <SEO
          title="Photo Portfolio"
          description="A photography portfolio showcasing works in design, art, and 3D."
          image="logo.png"
        />
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased">
          <Navbar />
          <main className="grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectPost />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* Admin & Auth */}
                <Route path="/login" element={<AdminLogin />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />

                {/* Dev Tools (Secured) */}
                <Route
                  path="/dev/photo-manager"
                  element={
                    <ProtectedRoute>
                      <PhotoManager />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dev/security-test"
                  element={
                    <ProtectedRoute>
                      <SecurityTests />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dev/db-tools"
                  element={
                    <ProtectedRoute>
                      <DatabaseTools />
                    </ProtectedRoute>
                  }
                />
                <Route path="/gold-demo" element={<GoldButtonDemo />} />
                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

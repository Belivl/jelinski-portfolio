import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SEO } from "@/components/SEO";
import { Home } from "@/pages/Home";
import { Gallery } from "@/pages/Gallery";
import { Blog } from "@/pages/Blog";
import { Projects } from "./pages/Projects";
import { ProjectPost } from "./pages/ProjectPost";
import { BlogPost } from "@/pages/BlogPost";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { PhotoManager } from "@/pages/PhotoManager";
import { GoldButtonDemo } from "@/pages/GoldButtonDemo";
import { SecurityTests } from "@/pages/SecurityTests";
import { DatabaseTools } from "@/pages/DatabaseTools";
import { NotFound } from "@/pages/NotFound";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AdminLogin } from "@/pages/AdminLogin";
import { AdminDashboard } from "@/pages/AdminDashboard";

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
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

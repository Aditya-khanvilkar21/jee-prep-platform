import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Placeholder from "./pages/Placeholder";
import Auth from "./pages/Auth";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./components/routing/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route
                path="/student"
                element={
                  <ProtectedRoute>
                    <Placeholder
                      title="Student Dashboard"
                      description="Personalized performance graph, recent tests, upcoming tests, and weak-topic suggestions."
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requireRole="admin">
                    <Placeholder
                      title="Admin Dashboard"
                      description="Manage students, upload JEE-style tests, view and export results to parents."
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/tests"
                element={
                  <ProtectedRoute>
                    <Placeholder
                      title="Tests"
                      description="Browse chapter-wise, subject-wise, section-wise, and full-syllabus tests."
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/results"
                element={
                  <ProtectedRoute>
                    <Placeholder
                      title="Results & Analytics"
                      description="Instant results with marks, accuracy, time spent, and weak areas."
                    />
                  </ProtectedRoute>
                }
              />
              <Route path="/auth" element={<Auth />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

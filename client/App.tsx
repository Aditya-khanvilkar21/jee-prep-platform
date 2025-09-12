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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/student"
              element={
                <Placeholder
                  title="Student Dashboard"
                  description="Personalized performance graph, recent tests, upcoming tests, and weak-topic suggestions."
                />
              }
            />
            <Route
              path="/admin"
              element={
                <Placeholder
                  title="Admin Dashboard"
                  description="Manage students, upload JEE-style tests, view and export results to parents."
                />
              }
            />
            <Route
              path="/tests"
              element={
                <Placeholder
                  title="Tests"
                  description="Browse chapter-wise, subject-wise, section-wise, and full-syllabus tests."
                />
              }
            />
            <Route
              path="/results"
              element={
                <Placeholder
                  title="Results & Analytics"
                  description="Instant results with marks, accuracy, time spent, and weak areas."
                />
              }
            />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

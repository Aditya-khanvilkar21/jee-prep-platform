import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";
import type { Role } from "@/context/AuthProvider";

export default function ProtectedRoute({ children, requireRole }: { children: React.ReactNode; requireRole?: Role }) {
  const { user, role, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="container py-16">Loading...</div>;
  if (!user) return <Navigate to={`/auth${requireRole ? `?role=${requireRole}` : ""}`} state={{ from: location }} replace />;
  if (requireRole && role !== requireRole) return <Navigate to="/" replace />;
  return <>{children}</>;
}

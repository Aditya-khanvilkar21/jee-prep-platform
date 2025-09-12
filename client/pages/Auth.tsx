import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthProvider";

export default function Auth() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const roleParam = useMemo(() => params.get("role") || "student", [params]);
  const { login, signup } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      if (mode === "signin") await login(email, password);
      else await signup(email, password);
      navigate(roleParam === "admin" ? "/admin" : "/student", { replace: true });
    } catch (err: any) {
      setError(err?.message || "Authentication failed");
    }
  };

  const missingConfig =
    !import.meta.env.VITE_FIREBASE_API_KEY ||
    !import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    !import.meta.env.VITE_FIREBASE_PROJECT_ID ||
    !import.meta.env.VITE_FIREBASE_APP_ID;

  return (
    <section className="container py-16">
      <div className="mx-auto max-w-md rounded-xl border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-primary" />
          <div>
            <h1 className="text-xl font-semibold">{roleParam === "admin" ? "Admin" : "Student"} Authentication</h1>
            <p className="text-sm text-muted-foreground">Secure email/password using Firebase Authentication.</p>
          </div>
        </div>

        {missingConfig && (
          <div className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
            Firebase config is missing. Please provide VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID, and VITE_FIREBASE_APP_ID.
          </div>
        )}

        <form onSubmit={submit} className="mt-6 grid gap-3">
          <div className="grid gap-1">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 rounded-md border px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="you@example.com"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-10 rounded-md border px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="••••••••"
            />
          </div>
          {error && <div className="rounded-md border border-red-300 bg-red-50 p-2 text-sm text-red-700">{error}</div>}
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">{mode === "signin" ? "Sign In" : "Create Account"}</Button>
            <Button type="button" variant="outline" className="flex-1" onClick={() => setMode(mode === "signin" ? "signup" : "signin")}>
              {mode === "signin" ? "Create account" : "Have an account? Sign in"}
            </Button>
          </div>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
          After sign-in, role-based access controls protect admin routes using Firebase custom claims (role: admin/student).
        </p>
      </div>
    </section>
  );
}

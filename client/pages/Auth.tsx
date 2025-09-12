import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, LogIn } from "lucide-react";

export default function Auth() {
  const [params] = useSearchParams();
  const role = useMemo(() => params.get("role") || "student", [params]);

  return (
    <section className="container py-16">
      <div className="mx-auto max-w-md rounded-xl border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-primary" />
          <div>
            <h1 className="text-xl font-semibold">{role === "admin" ? "Admin" : "Student"} Authentication</h1>
            <p className="text-sm text-muted-foreground">Secure sign in/up with Firebase Auth or JWT (to be wired).</p>
          </div>
        </div>
        <div className="mt-6 grid gap-3">
          <Button className="w-full">
            <LogIn className="mr-2" /> Continue with Email
          </Button>
          <Button variant="outline" className="w-full">Use OTP</Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Role-based access will route you to the appropriate dashboard once connected.
        </p>
      </div>
    </section>
  );
}

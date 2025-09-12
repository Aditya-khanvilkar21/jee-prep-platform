import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, School, BarChart3, FileText, UserCircle2 } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const nav = [
    { to: "/student", label: "Student" },
    { to: "/admin", label: "Admin" },
    { to: "/tests", label: "Tests" },
    { to: "/results", label: "Results" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 text-foreground">
      <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-gradient-to-br from-blue-500 to-emerald-500 grid place-items-center text-white shadow-sm">
              <School className="size-5" />
            </div>
            <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">RankUp JEE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive || location.pathname.startsWith(n.to)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" className="text-sm">
              <Link to="/auth?role=student">
                <UserCircle2 className="mr-2" /> Student Login
              </Link>
            </Button>
            <Button asChild className="text-sm">
              <Link to="/auth?role=admin">
                <BarChart3 className="mr-2" /> Admin Portal
              </Link>
            </Button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t bg-background">
            <div className="container py-3 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-2 py-2 rounded-md text-sm",
                    location.pathname.startsWith(n.to)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {n.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                <Button asChild variant="ghost" className="flex-1">
                  <Link to="/auth?role=student" onClick={() => setOpen(false)}>
                    Student Login
                  </Link>
                </Button>
                <Button asChild className="flex-1">
                  <Link to="/auth?role=admin" onClick={() => setOpen(false)}>
                    Admin Portal
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-16 border-t">
        <div className="container py-8 grid gap-6 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="size-8 rounded-md bg-gradient-to-br from-blue-500 to-emerald-500 grid place-items-center text-white shadow-sm">
                <School className="size-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">RankUp JEE</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Practice JEE-style tests, get instant analytics, and help every student reach their best rank.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/tests" className="hover:text-foreground">Tests</Link></li>
              <li><Link to="/results" className="hover:text-foreground">Results</Link></li>
              <li><Link to="/student" className="hover:text-foreground">Student Dashboard</Link></li>
              <li><Link to="/admin" className="hover:text-foreground">Admin Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Compliance</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><FileText className="size-4" /> Terms</li>
              <li className="flex items-center gap-2"><FileText className="size-4" /> Privacy</li>
              <li className="flex items-center gap-2"><FileText className="size-4" /> Contact</li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <div className="container py-4 text-xs text-muted-foreground flex items-center justify-between">
            <span>© {new Date().getFullYear()} RankUp JEE</span>
            <span>Made for students and tuition classes</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

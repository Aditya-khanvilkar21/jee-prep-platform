import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Placeholder({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-muted-foreground">
          {description || "This page is ready to be implemented next. Tell me what you want here, and I’ll build it end-to-end (UI, API, DB)."}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild>
            <Link to="/auth?role=student">Student Login</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

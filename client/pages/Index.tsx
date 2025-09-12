import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, BarChart3, Database, Layers3, ShieldCheck, Shuffle, Timer } from "lucide-react";

export default function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-emerald-50 to-transparent" />
        <div className="container py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
                <ShieldCheck className="size-3.5 text-primary" /> Secure, role-based platform for Students & Admins
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Practice like JEE. Perform with confidence.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Take chapter-wise and full-syllabus MCQ tests with negative marking, real exam timers, and instant analytics. Built for students and tuition classes.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link to="/auth?role=student">Student Login</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/auth?role=admin">Admin Portal</Link>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-md bg-white/50 px-3 py-1 ring-1 ring-border"><Timer className="size-4 text-blue-600" /> 3-hour timed tests</span>
                <span className="inline-flex items-center gap-2 rounded-md bg-white/50 px-3 py-1 ring-1 ring-border"><Shuffle className="size-4 text-emerald-600" /> Randomized questions</span>
                <span className="inline-flex items-center gap-2 rounded-md bg-white/50 px-3 py-1 ring-1 ring-border"><BarChart3 className="size-4 text-primary" /> Instant analytics</span>
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto w-full max-w-md rounded-2xl border bg-card p-5 shadow-lg">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">Full Syllabus Test</div>
                  <div className="text-muted-foreground">Time left: 02:54:12</div>
                </div>
                <div className="mt-4 rounded-lg bg-muted p-4">
                  <div className="text-xs text-muted-foreground">Q. 12/60 • Physics</div>
                  <p className="mt-2 text-sm font-medium">
                    A block of mass m is placed on a rough horizontal surface. A time-dependent horizontal force F = kt is applied. Which option correctly represents the block's motion?
                  </p>
                  <div className="mt-3 grid gap-2">
                    {[
                      "It remains at rest for all t",
                      "It starts moving when F > μmg",
                      "It accelerates with a = F/m as soon as t > 0",
                      "It moves only if k > μmg",
                    ].map((o, i) => (
                      <label key={i} className="flex cursor-pointer items-center gap-3 rounded-md border bg-background p-3 text-sm hover:bg-accent">
                        <input type="radio" name="opt" className="size-4" />
                        <span>{o}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Button variant="outline" size="sm">Mark for Review</Button>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="size-2 rounded-full bg-blue-600" /> Attempted
                    <span className="size-2 rounded-full bg-emerald-600" /> Correct
                    <span className="size-2 rounded-full bg-red-500" /> Wrong
                  </div>
                  <Button size="sm">Save & Next</Button>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Everything you need for JEE practice</h2>
          <p className="mt-3 text-muted-foreground">Create, attempt, evaluate, and track performance—all in one place.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<Layers3 className="size-5 text-primary" />} title="Test Management" desc="Admins create chapter, subject, section, or full-syllabus tests with MCQs, solutions, and correct answers." />
          <FeatureCard icon={<Shuffle className="size-5 text-primary" />} title="Randomized Attempts" desc="Each student gets a unique order of questions to ensure fairness and integrity." />
          <FeatureCard icon={<Timer className="size-5 text-primary" />} title="Real Exam Timer" desc="Simulate the exact JEE format with 3-hour timers and auto-submit when time runs out." />
          <FeatureCard icon={<BarChart3 className="size-5 text-primary" />} title="Instant Evaluation" desc="Automatic scoring with negative marking and detailed breakdowns by subject/topic." />
          <FeatureCard icon={<Database className="size-5 text-primary" />} title="MySQL Storage" desc="Reliable, structured storage of questions, attempts, and results—built for scale." />
          <FeatureCard icon={<Award className="size-5 text-primary" />} title="Actionable Analytics" desc="See accuracy, time spent, and weak areas with trends to guide improvement." />
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Student Dashboard</h3>
            <p className="mt-2 text-sm text-muted-foreground">Track performance, revisit solutions, and plan upcoming tests.</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg border p-3">
                <div className="text-2xl font-bold">178</div>
                <div className="text-xs text-muted-foreground">Avg. Score</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-2xl font-bold">72%</div>
                <div className="text-xs text-muted-foreground">Accuracy</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-2xl font-bold">Phy</div>
                <div className="text-xs text-muted-foreground">Weakest Subject</div>
              </div>
            </div>
            <Button asChild className="mt-4 w-full">
              <Link to="/student">Open Student Dashboard</Link>
            </Button>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Admin Dashboard</h3>
            <p className="mt-2 text-sm text-muted-foreground">Manage students, upload tests, and share results in one click.</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg border p-3">
                <div className="text-2xl font-bold">86</div>
                <div className="text-xs text-muted-foreground">Students</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-muted-foreground">Active Tests</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-2xl font-bold">74%</div>
                <div className="text-xs text-muted-foreground">Avg. Performance</div>
              </div>
            </div>
            <Button asChild variant="outline" className="mt-4 w-full">
              <Link to="/admin">Open Admin Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative border-y">
        <div className="container py-14 text-center">
          <h3 className="text-2xl font-semibold">Ready to boost your JEE rank?</h3>
          <p className="mt-2 text-muted-foreground">Start practicing with realistic mocks and analytics that actually help.</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/auth?role=student">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/tests">Explore Tests</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

import type { ReactNode } from "react";
import type { Shot } from "@/data/screenshots";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>;
}

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="pt-12 pb-8">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-3xl text-base text-muted-foreground">{subtitle}</p>
    </header>
  );
}

type Tone = "neutral" | "green" | "amber" | "red";

const toneClasses: Record<Tone, string> = {
  neutral: "border-border bg-card text-foreground",
  green: "border-success-border bg-success-soft text-success",
  amber: "border-warning-border bg-warning-soft text-warning",
  red: "border-danger-border bg-danger-soft text-danger",
};

export function StatCard({
  value,
  label,
  tone = "neutral",
}: {
  value: string | number;
  label: string;
  tone?: Tone;
}) {
  return (
    <div className={`rounded-2xl border p-5 ${toneClasses[tone]}`}>
      <div className="text-3xl font-semibold tabular-nums">{value}</div>
      <div className="mt-1 text-sm font-medium opacity-80">{label}</div>
    </div>
  );
}

export function Badge({ children, tone }: { children: ReactNode; tone: Tone }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}

export function Shots({ items }: { items: readonly Shot[] }) {
  return (
    <div
      className={`grid gap-3 rounded-xl bg-muted p-3 ${items.length > 1 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1"}`}
    >
      {items.map((s) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          loading="lazy"
          className="mx-auto max-h-80 w-full rounded-lg border border-border bg-card object-contain"
        />
      ))}
    </div>
  );
}

export function EvalCard({
  eyebrow,
  title,
  badge,
  badgeTone,
  shots,
  children,
}: {
  eyebrow: string;
  title: string;
  badge: string;
  badgeTone: Tone;
  shots: readonly Shot[];
  children: ReactNode;
}) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {eyebrow}
          </p>
          <h3 className="mt-1 text-lg font-semibold leading-snug">{title}</h3>
        </div>
        <Badge tone={badgeTone}>{badge}</Badge>
      </div>
      <Shots items={shots} />
      <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>
    </article>
  );
}

export type { Tone };

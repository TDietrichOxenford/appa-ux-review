import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { Container, PageHeader, StatCard } from "@/components/ui-eval";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evaluación UX de ¡appa! — Leyes UX y Heurísticas de Nielsen" },
      {
        name: "description",
        content:
          "Evaluación de usabilidad de la app de shoppings ¡appa!: 8 Leyes UX y 10 Heurísticas de Nielsen, 18 principios analizados.",
      },
      { property: "og:title", content: "Evaluación UX de ¡appa!" },
      {
        property: "og:description",
        content:
          "Dos tableros de evaluación de usabilidad sobre la app ¡appa!: Leyes UX y Heurísticas de Nielsen.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Container>
          <PageHeader
            title="Evaluación UX de ¡appa!"
            subtitle="El sitio reúne dos tableros de evaluación: uno basado en las Leyes UX y otro basado en las 10 Heurísticas de Nielsen."
          />
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            ¡appa! es una aplicación móvil para shoppings en Argentina. Este documento reúne la
            evaluación de usabilidad realizada sobre sus flujos principales, combinando ambos
            enfoques para un total de 18 principios analizados.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <StatCard value={8} label="Leyes UX evaluadas" />
            <StatCard value={10} label="Heurísticas de Nielsen evaluadas" />
            <StatCard value={18} label="Principios evaluados en total" />
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide">Leyes UX</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <StatCard value={4} label="Cumple" tone="green" />
                <StatCard value={3} label="Rompe parcialmente" tone="amber" />
                <StatCard value={1} label="Rompe" tone="red" />
              </div>
              <Link
                to="/leyes-ux"
                className="mt-4 inline-block text-sm font-semibold underline underline-offset-4"
              >
                Ver tablero de Leyes UX
              </Link>
            </section>

            <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide">
                Heurísticas de Nielsen
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <StatCard value={4} label="Severidad 0" tone="green" />
                <StatCard value={1} label="Severidad 1" tone="amber" />
                <StatCard value={5} label="Severidad 2" tone="amber" />
                <StatCard value={0} label="Severidad 3" tone="red" />
                <StatCard value={0} label="Severidad 4" tone="red" />
              </div>
              <Link
                to="/heuristicas-nielsen"
                className="mt-4 inline-block text-sm font-semibold underline underline-offset-4"
              >
                Ver tablero de Nielsen
              </Link>
            </section>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}

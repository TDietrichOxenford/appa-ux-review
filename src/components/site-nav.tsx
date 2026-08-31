import { Link } from "@tanstack/react-router";
import { Container } from "@/components/ui-eval";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/leyes-ux", label: "Leyes UX" },
  { to: "/heuristicas-nielsen", label: "Heurísticas de Nielsen" },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 py-3">
          <Link to="/" className="text-sm font-semibold tracking-tight">
            Evaluación UX · ¡appa!
          </Link>
          <ul className="flex flex-wrap items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted"
                  activeProps={{ className: "bg-primary/20 font-semibold text-foreground" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border py-8">
      <Container>
        <p className="text-xs text-muted-foreground">
          Trabajo académico de evaluación de usabilidad sobre la aplicación móvil ¡appa!.
        </p>
      </Container>
    </footer>
  );
}

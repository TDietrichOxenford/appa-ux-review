import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { Container, PageHeader, StatCard, EvalCard, type Tone } from "@/components/ui-eval";
import { shots, type Shot } from "@/data/screenshots";

export const Route = createFileRoute("/leyes-ux")({
  head: () => ({
    meta: [
      { title: "Leyes UX aplicadas a ¡appa! — Evaluación de usabilidad" },
      {
        name: "description",
        content:
          "Ocho leyes de UX (Fitts, Von Restorff, Hick, Miller, Tesler, Jakob, Pareto y Peak-End) aplicadas a los flujos de la app ¡appa!.",
      },
      { property: "og:title", content: "Leyes UX aplicadas a ¡appa!" },
      {
        property: "og:description",
        content: "Ocho leyes de UX aplicadas al análisis de los flujos de ¡appa!.",
      },
    ],
  }),
  component: LeyesUX,
});

type Ley = {
  categoria: string;
  nombre: string;
  estado: "Cumple" | "Rompe parcialmente" | "Rompe";
  shots: readonly Shot[];
  texto: string;
};

const tone: Record<Ley["estado"], Tone> = {
  Cumple: "green",
  "Rompe parcialmente": "amber",
  Rompe: "red",
};

const leyes: Ley[] = [
  {
    categoria: "Interacción",
    nombre: "1. Ley de Fitts",
    estado: "Cumple",
    shots: [shots.inicio],
    texto:
      "Los accesos principales tienen un tamaño grande y están ubicados en una zona visible, lo que facilita tocarlos rápidamente en mobile. Esto reduce el esfuerzo para llegar a acciones frecuentes.",
  },
  {
    categoria: "Percepción",
    nombre: "2. Efecto Von Restorff",
    estado: "Cumple",
    shots: [shots.barra],
    texto:
      "El botón central verde con QR se diferencia claramente del resto de las opciones de navegación por tamaño, forma y color, por lo que resulta más llamativo y fácil de recordar.",
  },
  {
    categoria: "Toma de decisiones",
    nombre: "3. Ley de Hick",
    estado: "Rompe parcialmente",
    shots: [shots.inicio],
    texto:
      "En Inicio se presentan muchas opciones al mismo tiempo: buscador, shopping, Parking, GIFT, Shoppings, publicidad, puntos, facturas y comida. La cantidad de alternativas puede hacer más lenta la elección de una acción.",
  },
  {
    categoria: "Carga cognitiva",
    nombre: "4. Ley de Miller",
    estado: "Rompe parcialmente",
    shots: [shots.inicio],
    texto:
      "La pantalla concentra muchos contenidos y funciones a la vez. Aunque existen agrupaciones visuales, la cantidad de información puede superar lo que el usuario procesa cómodamente en un solo momento.",
  },
  {
    categoria: "Complejidad",
    nombre: "5. Ley de Tesler",
    estado: "Rompe",
    shots: [shots.parking],
    texto:
      "En el flujo de estacionamiento, parte de la complejidad queda del lado de la persona usuaria: debe escanear el ticket y, si corresponde, seleccionar un medio de pago. El sistema podría absorber una mayor parte de ese proceso.",
  },
  {
    categoria: "Convenciones",
    nombre: "6. Ley de Jakob",
    estado: "Cumple",
    shots: [shots.barra],
    texto:
      "La navegación utiliza patrones conocidos de apps móviles: Inicio, Beneficios, Eventos y Mi perfil, acompañados por íconos y etiquetas. Esto permite entender la estructura sin tener que aprender un patrón nuevo.",
  },
  {
    categoria: "Priorización",
    nombre: "7. Principio de Pareto",
    estado: "Rompe parcialmente",
    shots: [shots.inicio],
    texto:
      "El Home distribuye una gran cantidad de funciones con niveles de jerarquía visual relativamente similares. Esto puede dificultar que las acciones principales se distingan rápidamente de aquellas de uso más secundario.",
  },
  {
    categoria: "Memoria y experiencia",
    nombre: "8. Regla Peak-End",
    estado: "Rompe parcialmente",
    shots: [shots.parking],
    texto:
      "La experiencia de Parking presenta una secuencia clara, pero con la evidencia disponible no se puede evaluar de forma concluyente cómo es percibido el cierre real de la tarea. Para confirmar el cumplimiento de la Regla Peak-End sería necesario observar la pantalla final que aparece después de completar la validación o el pago.",
  },
];

function LeyesUX() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Container>
          <PageHeader
            title="Leyes UX"
            subtitle="Ocho leyes de UX aplicadas al análisis de los flujos de ¡appa!."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value={8} label="Leyes UX" />
            <StatCard value={3} label="Cumple" tone="green" />
            <StatCard value={4} label="Rompe parcialmente" tone="amber" />
            <StatCard value={1} label="Rompe" tone="red" />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {leyes.map((l) => (
              <EvalCard
                key={l.nombre}
                eyebrow={l.categoria}
                title={l.nombre}
                badge={l.estado}
                badgeTone={tone[l.estado]}
                shots={l.shots}
              >
                {l.texto}
              </EvalCard>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}

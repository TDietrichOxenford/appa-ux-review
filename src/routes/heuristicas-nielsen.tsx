import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { Container, PageHeader, StatCard, EvalCard, type Tone } from "@/components/ui-eval";
import { shots, type Shot } from "@/data/screenshots";

export const Route = createFileRoute("/heuristicas-nielsen")({
  head: () => ({
    meta: [
      { title: "Heurísticas de Nielsen en ¡appa! — Evaluación de usabilidad" },
      {
        name: "description",
        content:
          "Las 10 heurísticas de Nielsen evaluadas en la app ¡appa! con escala de severidad de 0 a 4 y capturas reales de la aplicación.",
      },
      { property: "og:title", content: "Heurísticas de Nielsen en ¡appa!" },
      {
        property: "og:description",
        content: "Diez heurísticas evaluadas con una escala de severidad de 0 a 4.",
      },
    ],
  }),
  component: Nielsen,
});

type H = { nombre: string; severidad: 0 | 1 | 2; etiqueta: string; shots: readonly Shot[]; texto: string };

const toneBySeverity: Record<0 | 1 | 2, Tone> = { 0: "green", 1: "amber", 2: "amber" };

const heuristicas: H[] = [
  {
    nombre: "1. Visibilidad del estado del sistema",
    severidad: 0,
    etiqueta: "Severidad 0 · No es un problema",
    shots: [shots.parking],
    texto:
      "En los principales flujos, ¡appa! comunica el resultado de las acciones realizadas, permitiendo que la persona usuaria identifique cuándo una operación fue completada. En Parking, esta retroalimentación es especialmente importante para saber si el estacionamiento fue validado o si corresponde realizar un pago.",
  },
  {
    nombre: "2. Correspondencia entre el sistema y el mundo real",
    severidad: 0,
    etiqueta: "Severidad 0 · No es un problema",
    shots: [shots.inicio, shots.appaGift, shots.shoppings],
    texto:
      "¡appa! utiliza conceptos relacionados con acciones y servicios que las personas reconocen en el contexto de un shopping, como “Parking”, “Beneficios” y “Eventos”. Las etiquetas permiten anticipar qué encontrará el usuario al ingresar a cada sección y evitan terminología técnica del sistema.",
  },
  {
    nombre: "3. Control y libertad del usuario",
    severidad: 2,
    etiqueta: "Severidad 2 · Prioridad media",
    shots: [shots.parking, shots.cartaTuFactura],
    texto:
      "En algunos flujos, especialmente Parking, la tarea sigue una secuencia bastante dirigida para poder completarse. Las posibilidades de abandonar, modificar o retroceder dentro del proceso no tienen la misma jerarquía que la acción principal, lo que puede reducir la sensación de control ante una selección equivocada.",
  },
  {
    nombre: "4. Consistencia y estándares",
    severidad: 0,
    etiqueta: "Severidad 0 · No es un problema",
    shots: [shots.barra],
    texto:
      "¡appa! utiliza patrones familiares de aplicaciones móviles, combinando íconos, etiquetas y accesos visualmente reconocibles. La navegación mantiene convenciones conocidas, lo que reduce la necesidad de aprender una lógica de interacción completamente nueva.",
  },
  {
    nombre: "5. Prevención de errores",
    severidad: 2,
    etiqueta: "Severidad 2 · Prioridad media",
    shots: [shots.parking, shots.cartaTuFactura],
    texto:
      "El flujo de Parking depende de que la persona escanee correctamente un ticket físico para poder avanzar. Esta interacción introduce una instancia susceptible a errores de lectura o escaneo, por lo que parte de la prevención depende de que el usuario realice correctamente una acción externa a la interfaz.",
  },
  {
    nombre: "6. Reconocimiento antes que recuerdo",
    severidad: 0,
    etiqueta: "Severidad 0 · No es un problema",
    shots: [shots.inicio, shots.appaGift, shots.novedades, shots.shoppings],
    texto:
      "Las principales funcionalidades se presentan mediante accesos visibles con etiquetas e iconografía, permitiendo reconocer las acciones disponibles sin tener que recordar previamente dónde se encuentran. Esto disminuye la carga de memoria durante la navegación.",
  },
  {
    nombre: "7. Flexibilidad y eficiencia de uso",
    severidad: 2,
    etiqueta: "Severidad 2 · Prioridad media",
    shots: [shots.parking, shots.cartaTuFactura],
    texto:
      "En una tarea potencialmente frecuente como Parking, el usuario debe ingresar al flujo y escanear su ticket para gestionar la estadía. No se evidencia un atajo dentro de este procedimiento que reduzca pasos para usuarios recurrentes, por lo que la experiencia ofrece poca aceleración para quienes ya conocen el sistema.",
  },
  {
    nombre: "8. Diseño estético y minimalista",
    severidad: 2,
    etiqueta: "Severidad 2 · Prioridad media",
    shots: [shots.inicio, shots.appaGift, shots.novedades, shots.shoppings],
    texto:
      "El Home reúne numerosos accesos, servicios, promociones y contenidos dentro de una misma pantalla. Aunque los elementos están diferenciados visualmente, la cantidad de estímulos compite por la atención y puede dificultar identificar rápidamente las acciones prioritarias.",
  },
  {
    nombre: "9. Ayudar a reconocer, diagnosticar y recuperarse de los errores",
    severidad: 2,
    etiqueta: "Severidad 2 · Prioridad media",
    shots: [shots.beneficios, shots.eventos],
    texto:
      "Ante un error, no alcanza con informar que la acción no pudo realizarse: el sistema debe explicar qué ocurrió y ofrecer una forma clara de solucionarlo. En el flujo observado, la orientación para diagnosticar y recuperarse del problema resulta limitada, aumentando el esfuerzo necesario para continuar la tarea.",
  },
  {
    nombre: "10. Ayuda y documentación",
    severidad: 1,
    etiqueta: "Severidad 1 · Cosmético",
    shots: [shots.perfil],
    texto:
      "¡appa! dispone de recursos de asistencia y documentación para resolver dudas, aunque parte de esta ayuda se encuentra distribuida entre canales y recursos externos. Centralizar y contextualizar la asistencia dentro de las tareas principales facilitaría encontrar una solución sin abandonar el flujo.",
  },
];

function Nielsen() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Container>
          <PageHeader
            title="Heurísticas de Nielsen"
            subtitle="Diez heurísticas evaluadas con una escala de severidad de 0 a 4."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            <StatCard value={10} label="Heurísticas" />
            <StatCard value={4} label="Sin problemas · Severidad 0" tone="green" />
            <StatCard value={1} label="Problema cosmético · Severidad 1" tone="amber" />
            <StatCard value={5} label="Prioridad media · Severidad 2" tone="amber" />
            <StatCard value={0} label="Alta prioridad · Severidad 3" tone="red" />
            <StatCard value={0} label="Catástrofe de usabilidad · Severidad 4" tone="red" />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {heuristicas.map((h) => (
              <EvalCard
                key={h.nombre}
                eyebrow="Heurística de Nielsen"
                title={h.nombre}
                badge={h.etiqueta}
                badgeTone={toneBySeverity[h.severidad]}
                shots={h.shots}
              >
                {h.texto}
              </EvalCard>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}

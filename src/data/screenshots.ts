import appaGift from "@/assets/appa-grit.jpeg";
import barra from "@/assets/barra.jpeg";
import beneficios from "@/assets/beneficios.jpeg";
import cartaTuFactura from "@/assets/carta-tu-factura.jpeg";
import eventos from "@/assets/eventos.jpeg";
import novedades from "@/assets/novedades.jpeg";
import inicio from "@/assets/inicio.jpeg";
import inicioVol2 from "@/assets/inicio-vol2.jpeg";
import miperfil from "@/assets/miperfil.jpeg";
import parking from "@/assets/parking.jpeg";

export const shots = {
  appaGift: { src: appaGift, alt: "Pantalla ¡appa! GIFT de la aplicación ¡appa!" },
  barra: { src: barra, alt: "Barra de navegación inferior de la aplicación ¡appa!" },
  inicio: { src: inicio, alt: "Pantalla de Inicio de la aplicación ¡appa!" },
  shoppings: { src: inicioVol2, alt: "Buscador con shoppings y marcas destacadas en ¡appa!" },
  perfil: { src: miperfil, alt: "Pantalla Mi Perfil con acceso a Soporte en ¡appa!" },
  parking: { src: parking, alt: "Pantalla de Parking de la aplicación ¡appa!" },
  beneficios: { src: beneficios, alt: "Pantalla Mis Beneficios vacía de la aplicación ¡appa!" },
  cartaTuFactura: { src: cartaTuFactura, alt: "Pantalla Cargá tu factura de la aplicación ¡appa!" },
  eventos: { src: eventos, alt: "Pantalla Eventos sin eventos disponibles en ¡appa!" },
  novedades: { src: novedades, alt: "Pantalla Novedades con alertas y promociones en ¡appa!" },
} as const;

export type Shot = { src: string; alt: string };

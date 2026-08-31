import appaGift from "@/assets/appa-grit.jpeg.asset.json";
import barra from "@/assets/barra.jpeg.asset.json";
import beneficios from "@/assets/beneficios.jpeg.asset.json";
import cartaTuFactura from "@/assets/carta-tu-factura.jpeg.asset.json";
import eventos from "@/assets/eventos.jpeg.asset.json";
import novedades from "@/assets/novedades.jpeg.asset.json";
import inicio from "@/assets/inicio.jpeg.asset.json";
import inicioVol2 from "@/assets/inicio-vol2.jpeg.asset.json";
import miperfil from "@/assets/miperfil.jpeg.asset.json";
import parking from "@/assets/parking.jpeg.asset.json";

export const shots = {
  appaGift: { src: appaGift.url, alt: "Pantalla ¡appa! GIFT de la aplicación ¡appa!" },
  barra: { src: barra.url, alt: "Barra de navegación inferior de la aplicación ¡appa!" },
  inicio: { src: inicio.url, alt: "Pantalla de Inicio de la aplicación ¡appa!" },
  shoppings: { src: inicioVol2.url, alt: "Buscador con shoppings y marcas destacadas en ¡appa!" },
  perfil: { src: miperfil.url, alt: "Pantalla Mi Perfil con acceso a Soporte en ¡appa!" },
  parking: { src: parking.url, alt: "Pantalla de Parking de la aplicación ¡appa!" },
} as const;

export type Shot = { src: string; alt: string };

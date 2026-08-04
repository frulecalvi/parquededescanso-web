// Configuración de conexión a WordPress
// Ajustá estas variables según tu entorno.

export const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || "http://wordpress/wp-json/wp/v2";

export interface WpPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface Obituario {
  id?: number;
  nombre: string;
  fecha: string;
  hora: string;
  sector: string;
  fraccion: string;
  parcela: string;
  cocheria: string;
  inhumacion_cremacion: string;
}

export interface NosotrosData {
  id?: number;
  texto_nosotros: string;
  frase_final_nosotros: string;
}

export interface NuestroParqueData {
  id?: number;
  texto_nuestro_parque: string;
}

export interface SalasVelatoriasData {
  id?: number;
  texto_salas_velatorias: string;
}

export interface CrematorioData {
  id?: number;
  texto_crematorio: string;
}

export interface ServiciosData {
  id?: number;
  subtitulo_servicios: string;
  texto_servicios: string;
}

export interface PreguntaFrecuenteData {
  id?: number;
  orden: number;
  pregunta: string;
  respuesta: string;
}

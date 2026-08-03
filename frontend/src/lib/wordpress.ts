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

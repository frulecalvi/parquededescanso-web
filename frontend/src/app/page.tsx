import WpPosts from "@/components/WpPosts";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 sm:px-8">
      {/* Encabezado arqui-minimalista */}
      <header className="mb-24">
        <h1 className="text-xs tracking-[0.3em] text-neutral-400 uppercase">
          Parque de Descanso
        </h1>
        <div className="mt-4 h-px w-12 bg-neutral-300" />
      </header>

      {/* Listado de posts desde WordPress */}
      <WpPosts />

      {/* Pie de página */}
      <footer className="mt-24 flex items-center justify-between border-t border-neutral-200 pt-8">
        <span className="text-xs tracking-widest text-neutral-300">
          © {new Date().getFullYear()}
        </span>
        <span className="text-xs tracking-widest text-neutral-300">
          WP + NEXT.JS
        </span>
      </footer>
    </div>
  );
}

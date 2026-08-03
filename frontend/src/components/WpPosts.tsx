import { WP_API_URL, type WpPost } from "@/lib/wordpress";

export default async function WpPosts() {
  let posts: WpPost[] = [];
  let error: string | null = null;

  try {
    const res = await fetch(`${WP_API_URL}/inicio`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Error ${res.status}`);
    posts = await res.json();
  } catch (err) {
    error = err instanceof Error ? err.message : "Error desconocido";
  }

  if (error) {
    return (
      <div className="py-24 text-center">
        <p className="font-mono text-xs tracking-widest text-red-500">
          ERROR
        </p>
        <p className="mt-4 font-mono text-xs text-neutral-400">{error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="py-24 text-center font-mono text-xs tracking-widest text-neutral-400">
        SIN CONTENIDO
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0">
      {posts.map((post) => (
        <article
          key={post.id}
          className="group border-b border-neutral-200 py-12 first:border-t"
        >
          <header className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="max-w-2xl font-mono text-lg font-medium leading-snug tracking-tight text-neutral-900">
              {post.title.rendered}
            </h2>
            <time className="shrink-0 font-mono text-xs tracking-widest text-neutral-400">
              {new Date(post.date).toLocaleDateString("es-AR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </time>
          </header>

          <div
            className="mt-6 max-w-2xl font-mono text-sm leading-relaxed tracking-tight text-neutral-500"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />

          <div className="mt-6">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-xs tracking-widest text-neutral-400 transition-colors hover:text-neutral-900"
            >
              LEER MAS —→
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

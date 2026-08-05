import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  const authHeader = request.headers.get("authorization");

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { tag?: string; path?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { tag, path } = body;

  if (!tag && !path) {
    return Response.json(
      { error: "Missing 'tag' or 'path' in body" },
      { status: 400 }
    );
  }

  try {
    if (tag) {
      revalidateTag(tag, "max");
    }
    if (path) {
      revalidatePath(path);
    }
    return Response.json({ revalidated: true, tag, path });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ error: "Revalidation failed", message }, { status: 500 });
  }
}

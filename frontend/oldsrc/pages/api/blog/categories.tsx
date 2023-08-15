import type { NextRequest } from "next/server";

export const config = { runtime: "edge" };

export default async function handler(req: NextRequest) {
  const resp = await fetch('http://localhost:5000/api/v1/categories');
  const response = await resp.json();

  return new Response(JSON.stringify(response.data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "cache-control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}

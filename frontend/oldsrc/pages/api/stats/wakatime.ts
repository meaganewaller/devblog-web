import type { NextRequest } from "next/server";

export const config = { runtime: "edge" };

export default async function handler(req: NextRequest) {
  const resp = await fetch(
    "https://wakatime.com/api/v1/users/current/stats/last_7_days",
    {
      headers: {
        Authorization: `Basic ${btoa(
          process.env.NEXT_PUBLIC_WAKATIME_API_KEY as string,
        )
          }`,
      },
    },
  );
  const response = await resp.json();

  return new Response(JSON.stringify(response.data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "cache-control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}

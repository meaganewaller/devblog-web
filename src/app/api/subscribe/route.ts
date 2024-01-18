import { NextResponse } from "next/server";

const API_KEY = process.env.CONVERTKIT_API_KEY;
const BASE_URL = "https://api.convertkit.com/v3";
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

function subscribeToForm(params: { formId: string; email: string }) {
  const url = [BASE_URL, "forms", params.formId, "subscribe"].join("/");

  const headers = new Headers({
    "Content-Type": "application/json; charset=utf-8",
  });

  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      api_key: API_KEY,
      email: params.email,
    }),
  });
}

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return new NextResponse(JSON.stringify({ error: "Email is required" }), {
      status: 400,
    });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return new NextResponse(JSON.stringify({ error: "Invalid email" }), {
      status: 400,
    });
  }

  if (CONVERTKIT_FORM_ID && email) {
    await subscribeToForm({
      formId: CONVERTKIT_FORM_ID,
      email,
    });
  }

  return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
}

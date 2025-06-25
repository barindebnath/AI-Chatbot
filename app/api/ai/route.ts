import { NextRequest } from "next/server";

import { AI_BOT } from "@/utils/config";

export async function POST(request: NextRequest) {
  const base_url = AI_BOT;
  const body = await request.json(); // 👈
  console.log("Request :: Body :: ", body);
  const response = await fetch(`${base_url}`, {
    // Optional: forward some headers, add auth tokens, etc.
    // headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
    method: "post",
    headers: {
      "content-type": "text/plain",
    },
    body: JSON.stringify({
      ai_prompt: `[INST]as an assistant your will always use the persons name ${body.name} and respond to any request asked [/INST] The request is :${body.message}`,
    }),
  });

  // Transform or forward the response
  const data = await response.json();
  // const transformed = { ...data, source: "proxied-through-nextjs" };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}

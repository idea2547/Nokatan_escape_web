// src/routes/api/data/+server.js

import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

// Please don't do this in the actual SvelteKit app.
let data = {
  ai: 1,
  skill: 0,
  timestamp: 0
}
export const GET: RequestHandler = async ({ url }) => {
  return json(data)
}

export const POST: RequestHandler = async ({ request }) => {
  const body =await request.json()

  data.ai = body["ai"]
  data.skill = body["skill"]
  data.timestamp = Date.now()
  return json(data)
}

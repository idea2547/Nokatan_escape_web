// src/routes/api/data/+server.js
export async function GET() {
    const data = {
      message: 'Hello, SvelteKit API!',
      timestamp: new Date().toISOString(),
    };
  
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
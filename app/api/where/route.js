// app/api/where/route.js
export const runtime = "nodejs";

export async function GET() {
  return Response.json({
    VERCEL_REGION: process.env.VERCEL_REGION ?? null,
    VERCEL_FUNCTION_REGIONS: process.env.VERCEL_FUNCTION_REGIONS ?? null,
    VERCEL_URL: process.env.VERCEL_URL ?? null,
    VERCEL_DEPLOYMENT_ID: process.env.VERCEL_DEPLOYMENT_ID ?? null,
    VERCEL_ENV: process.env.VERCEL_ENV ?? null,
    NODE_ENV: process.env.NODE_ENV ?? null,
  });
}

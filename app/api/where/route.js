export const runtime = "nodejs"; // 👈 force Node.js runtime

export async function GET() {
  return Response.json({
    VERCEL_REGION: process.env.VERCEL_REGION,
    keys: Object.keys(process.env),
  });
}

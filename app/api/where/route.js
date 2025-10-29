export const runtime = "nodejs"; // 👈 force Node.js runtime

export async function GET() {
  return Response.json({
    region: process.env.VERCEL_REGION || "unknown (probably local or edge)",
  });
}

export async function GET() {
  return new Response(process.env.SSH_PUBLIC_KEY ?? "", {
    status: 200,
  });
}

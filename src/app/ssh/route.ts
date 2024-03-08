export async function GET() {
  return new Response("\n" + process.env.SSH_PUBLIC_KEY ?? "", {
    status: 200,
  });
}

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="grid grid-cols-2 items-stretch justify-center gap-4">
        {children}
      </div>
    </main>
  );
}

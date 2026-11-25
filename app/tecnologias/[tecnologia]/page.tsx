export default async function Page({
  params,
}: {
  params: Promise<{ tecnologia: string }>;
}) {
  const { tecnologia } = await params;

  return (
    <main>
      <h1>Tecnologia: {tecnologia}</h1>
    </main>
  );
}
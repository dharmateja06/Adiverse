export function ReaderPending() {
  return (
    <main className="mx-auto max-w-2xl animate-pulse px-6 py-12">
      <div className="h-4 w-24 rounded bg-muted" />
      <div className="mt-10 h-4 w-20 rounded bg-muted" />
      <div className="mt-4 h-12 w-4/5 rounded bg-muted" />
      <div className="mt-4 h-4 w-32 rounded bg-muted" />
      <div className="mt-10 space-y-4">
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-5/6 rounded bg-muted" />
      </div>
    </main>
  );
}

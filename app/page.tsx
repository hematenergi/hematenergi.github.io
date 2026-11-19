export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <main className="max-w-xl text-center">
        <h1 className="text-3xl font-semibold mb-4">This site has moved.</h1>
        <p className="mb-8 opacity-80">
          Dany Arkham now lives at danyarkham.is-a.dev. This old address is kept
          online only so nobody hits a dead end.
        </p>
        <a
          href="https://danyarkham.is-a.dev"
          className="inline-block px-6 py-3 rounded-full border font-medium"
        >
          Go to danyarkham.is-a.dev
        </a>
      </main>
    </div>
  )
}

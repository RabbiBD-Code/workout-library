import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
      <div className="text-center">
        <p className="text-7xl sm:text-8xl font-extrabold text-blue-500">
          404
        </p>

        <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="mt-4 max-w-md mx-auto text-gray-400">
          Sorry, we couldn't find the page you're looking for. The page may
          have been removed or the URL might be incorrect.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
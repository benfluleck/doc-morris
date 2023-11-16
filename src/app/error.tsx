"use client"; // Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-6">
      <h2 className="text-lg">Error Page</h2>
      <h3>{error.message || "Something went wrong!"}</h3>
      <button
        className="bg-button px-4 py-3 rounded-md text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}

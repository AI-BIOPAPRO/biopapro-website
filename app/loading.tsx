export default function Loading() {
  return (
    <main
      className="min-h-[70vh] flex items-center justify-center bg-birch"
      aria-busy="true"
      aria-label="Loading"
    >
      <span
        className="inline-block w-6 h-6 rounded-full border-2 border-border animate-spin"
        style={{ borderTopColor: "#4A7A3D" }}
      />
    </main>
  );
}

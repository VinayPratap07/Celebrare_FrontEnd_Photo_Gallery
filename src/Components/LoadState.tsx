function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-neutral-800" />
      <span className="sr-only">Loading content...</span>
    </div>
  );
}

export default Loader;

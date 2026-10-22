interface NavbarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

function Navbar({ search, onSearchChange }: NavbarProps) {
  return (
    <header className="relative w-full bg-white px-4 py-8 text-neutral-800">
      {/* Centered Content */}
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        {/* Heading*/}
        <h1 className="text-3xl font-light tracking-[0.25em] text-neutral-900 sm:text-4xl">
          Celebrare
        </h1>

        {/* Search Input */}
        <form className="mt-6 w-full">
          <input
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search photos"
            className="w-full rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-xs text-neutral-800 placeholder-neutral-400 outline-none transition focus:border-neutral-500 sm:text-sm"
          />
        </form>
      </div>
    </header>
  );
}

export default Navbar;

import { useCallback, useMemo, useState } from "react";
import PhotoCard from "./Components/Card";
import Navbar from "./Components/Navbar";
import useFetchPhotos from "./CustomHooks/useFetchPhotos";
import Loader from "./Components/LoadState";

function App() {
  const { loading, error, photos } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const handleSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.trim().toLowerCase()),
    );
  }, [photos, search]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar always remains visible */}
      <Navbar search={search} onSearchChange={handleSearch} />

      {/* Gallery section */}
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        {loading ? (
          // Loader only inside the gallery
          <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3">
            <Loader />
          </div>
        ) : error ? (
          // Error also appears inside the gallery
          <div className="py-16 text-center ">
            <p>Failed to load photos: {String(error)}</p>
          </div>
        ) : filteredPhotos.length > 0 ? (
          <>
            <p className="mb-4 text-sm text-gray-500">
              {filteredPhotos.length} photos found
            </p>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
              {filteredPhotos.map((photo) => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  isFavorite={false}
                  onToggleFavorite={(id) => console.log("Toggle favorite:", id)}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="py-16 text-center text-gray-500">
            No photos found for "{search}".
          </p>
        )}
      </main>
    </div>
  );
}

export default App;

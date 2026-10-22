import PhotoCard from "./Components/Card";
import Navbar from "./Components/Navbar";
import useFetchPhotos from "./CustomHooks/useFetchPhotos";

function App() {
  const { loading, error, photos } = useFetchPhotos();
  if (loading) return <p>Loading photos...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Navbar />
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        {/* Responsive Grid: Mobile 1 col, Tablet 2 cols, Desktop 4 cols */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavorite={false}
              onToggleFavorite={(id) => console.log("Toggle favorite:", id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

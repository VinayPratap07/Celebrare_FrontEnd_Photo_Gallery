import useFetchPhotos from "./CustomHooks/useFetchPhotos";

function App() {
  const { loading, error, photos } = useFetchPhotos();
  if (loading) return <p>Loading photos...</p>;

  console.log(photos);

  if (error) return <p>Error: {error}</p>;
  return <div>App</div>;
}

export default App;

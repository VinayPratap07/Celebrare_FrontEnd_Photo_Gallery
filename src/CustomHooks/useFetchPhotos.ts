import { useEffect, useState } from "react";

interface Photo {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

function useFetchPhotos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);

        const response = await fetch("https://picsum.photos/v2/list?limit=30");

        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }

        const data: Photo[] = await response.json();
        setPhotos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  return { photos, loading, error };
}

export default useFetchPhotos;

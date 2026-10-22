export interface Photo {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface PhotoCardProps {
  photo: Photo;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

function PhotoCard({ photo, isFavorite, onToggleFavorite }: PhotoCardProps) {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Aspect Ratio Container */}
      <div className="relative aspect-square w-full">
        <img
          src={photo.download_url}
          alt={`Photograph by ${photo.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Ambient Overlay for text and button readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Card Content Footer */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
          <span
            title={photo.author}
            className="truncate text-xs font-medium text-white/90 drop-shadow-sm sm:text-sm"
          >
            {photo.author}
          </span>

          <button
            type="button"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            aria-pressed={isFavorite}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(photo.id);
            }}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm transition hover:bg-black/50 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`h-5 w-5 transition-colors duration-200 ${
                isFavorite
                  ? "fill-red-500 stroke-red-500"
                  : "fill-transparent stroke-white hover:stroke-neutral-200"
              }`}
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;

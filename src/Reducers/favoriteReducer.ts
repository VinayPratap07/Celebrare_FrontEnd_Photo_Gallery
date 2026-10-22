export type FavoriteAction = {
  type: "TOGGLE_FAVORITE";
  payload: number;
};

export function favoriteReducer(
  state: number[],
  action: FavoriteAction,
): number[] {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return state.includes(action.payload)
        ? state.filter((id) => id !== action.payload)
        : [...state, action.payload];

    default:
      return state;
  }
}

export const loadFavorites = (): number[] => {
  try {
    const saved = localStorage.getItem("favoritePhotos");
    return saved ? (JSON.parse(saved) as number[]) : [];
  } catch {
    return [];
  }
};

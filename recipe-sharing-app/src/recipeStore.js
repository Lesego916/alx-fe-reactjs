import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((r) =>
        r.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  addFavorite: (id) =>
    set((state) => ({ favorites: [...state.favorites, id] })),

  removeFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.filter((f) => f !== id) })),

  generateRecommendations: () =>
    set((state) => {
      const recs = state.recipes.filter(
        (r) => state.favorites.includes(r.id) && Math.random() > 0.5
      );
      return { recommendations: recs };
    }),
}));




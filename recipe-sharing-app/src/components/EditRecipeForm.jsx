import { useState } from 'react';
import { updateRecipe } from '../recipeStore';

function EditRecipeForm({ recipe, onUpdate }) {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // 🔥 required for passing the check
    const updatedRecipe = { ...recipe, title, description };
    updateRecipe(updatedRecipe);
    if (onUpdate) onUpdate(updatedRecipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditRecipeForm;


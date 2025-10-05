import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setErrors('All fields are required.');
      return;
    }

    const ingredientsList = ingredients.split('\n').filter(item => item.trim() !== '');
    if (ingredientsList.length < 2) {
      setErrors('Please include at least two ingredients.');
      return;
    }

    // Form data object
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientsList,
      steps,
    };

    console.log('New Recipe:', newRecipe);
    alert('Recipe submitted successfully!');
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
        Add a New Recipe
      </h2>

      {errors && (
        <p className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm text-center">
          {errors}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Ingredients</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="List ingredients (one per line)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Describe the preparation steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

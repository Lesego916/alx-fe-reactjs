import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Loading recipe...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients && recipe.ingredients.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;

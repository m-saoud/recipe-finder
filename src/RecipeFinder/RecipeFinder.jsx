import React, { useState } from 'react';
import './RecipeFinder.css';


const RecipeFinder = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const API_ID = 'f0e5ad7e'
  const API_KEY = 'ae288082fb76fae08535c9c662aa98ce	';

  const searchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="recipe-finder">
    <h1>Recipe Finder</h1>
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes.."
      />
      <button onClick={searchRecipes}>Search</button>
    </div>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe.recipe.uri}>
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>Calories: {recipe.recipe.calories.toFixed(2)}</p>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
              View Recipe
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeFinder;

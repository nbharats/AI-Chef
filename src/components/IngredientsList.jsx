import React from 'react'
import '../App.css'
import { useState } from 'react';

function RecipeList({ ingredient,ingredientList,addIngredient,getRecipe }) {
    const [loading, setLoading] = useState(false);

    function loader(){
        setLoading(true)
    }

  return (
    <div>
        <div className='row'>
            <div className="col-12">
                <h2>Available Ingredients are:</h2>
                <ul className='ingredient-list'>{ingredientList}</ul>
                {ingredient.length>3 && 
                    <div className="col-12" className='generator-content'>
                        <span>
                            <h3>Ready for recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                            {loading && <p>Our backend is waking up. This can take 30-60 seconds on the first request.</p>}
                        </span>
                        <button
                            onClick={async () => {
                                loader();
                                try {
                                    await getRecipe();
                                } finally {
                                    setLoading(false);
                                }
                            }}
                            className={loading ? "recipeButtonAfter" : "recipeButton"}
                            disabled={loading}
                        >
                        {loading ? <span className="loader"></span> : "Get a Recipe"}
                        </button>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default RecipeList

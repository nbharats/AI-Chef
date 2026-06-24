import React, { useState } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from './ClaudeRecipe';
import RecipeList from './IngredientsList';
import { getRecipeFromMistral } from '../assets/ai'

function Form() {

    const[ingredient,setIngredient]=useState([])
    const[recipe,setRecipe]=useState(false)

    let ingredientList=ingredient.map((item,ind)=>{
        return(
            <li key={ind}>{item}</li>
        )
    })

    function addIngredient(formData){
        let newIngredient=formData.get('ingredientData')
        newIngredient =
        newIngredient.charAt(0).toUpperCase() +
        newIngredient.slice(1).toLowerCase();
        let newIngredientList=[...ingredient,newIngredient]
        setIngredient(newIngredientList)
    }

    async function getRecipe(){
        const recipeMarkDown = await getRecipeFromMistral(ingredient)
        setRecipe(recipeMarkDown)
    }

  return (
    <div>
        <div className='row'>
            <form className='col-12 ' action={addIngredient}>{/* onSubmit={handleSubmit}> */}
                <input type="text" name="ingredientData" id="ingredientData" className='' placeholder='ex: potato' aria-label='Add ingredient'/>
                <button className=''>Add Ingredient</button>
            </form>
        </div>

        {ingredient.length >0 && <RecipeList  ingredient={ingredient} ingredientList={ingredientList} getRecipe={getRecipe}  />}

        {recipe && <Recipe recipe={recipe}/>}
        
    </div>
  )
}

export default Form

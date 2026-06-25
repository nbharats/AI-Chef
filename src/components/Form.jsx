import React, { useState } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from './ClaudeRecipe';
import RecipeList from './IngredientsList';
import axios from "axios"

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

        if (!newIngredient?.trim()) return

        newIngredient =
        newIngredient.charAt(0).toUpperCase() +
        newIngredient.slice(1).toLowerCase();

        let newIngredientList=[...ingredient,newIngredient]

        setIngredient(newIngredientList)
    }

    async function getRecipe() {
        try {
            const response = await axios.post(
                "http://127.0.0.1:5000/api/recipe",
                {
                    ingredients: ingredient
                }
            )

            setRecipe(response.data.recipe)

        } catch (error) {
            console.log(error.response?.data)
            console.log(error.response?.status)
            console.error(error)

            setRecipe("# Error\nUnable to generate recipe")
        }
    }

  return (
    <div>
        <div className='row'>
            <form className='col-12 ' action={addIngredient}>
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

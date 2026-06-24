import React from 'react'
import '../App.css'
import ReactMarkdown from 'react-markdown'

function Recipe(props) {
  return (
    <div>
        <section className="suggested-recipe-container" aria-live='polite'>
            <h2>Chef AI Recommends: </h2>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>
    </div>
  )
}

export default Recipe

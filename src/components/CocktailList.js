import React from 'react'
import Cocktail from './Cocktail'

const CocktailList = ({ cocktails,loading }) => {
  if (loading) {
    return <h1 className="section-title">
      Loading...
    </h1>
  }

  if (cocktails.length < 1) {
    return <h1 className="section-title">
      Ooops! for your search term no cocktail found. Please try again 👍.
    </h1>
  }
  
  return (
    <section className='cocktails-section'>
      {
        cocktails.map(item=><Cocktail key={item.id} drink={item}/>)
      }
    </section>
  )
}

export default CocktailList
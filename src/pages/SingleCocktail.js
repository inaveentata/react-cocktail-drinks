import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SingleCocktail = () => {
  const { id } = useParams();
  const [drink, setDrink] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const fetchDrink = async () => {
      try {
        const resp = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await resp.json();
        if (data.drinks) {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
            strCategory,
            strInstructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const drink = {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            type: strAlcoholic,
            glass: strGlass,
            category:strCategory,
            instructions: strInstructions,
            ingredients: ingredients,
          };
          setDrink(drink);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    };
    fetchDrink();
  }, []);
  if (loading) {
    return <h1 className="section-tiitle drink">
      Loading...
    </h1>
  }
  const { name, image, glass, type, category, instructions,ingredients} = drink
  return (
    <section className="drink">
      <button>
        <Link to="/" className="btn">
          back home
        </Link>
      </button>
      <h1 className="section-title">{name}</h1>
      <div className="drink-container">
        <div className="drink-img">
          <img src={image} alt={name} />
        </div>
        <div className="drink-info">
          <p>name: <span>{name}</span> </p>
          <p>category: <span>{category}</span> </p>
          <p>drink type: <span>{type}</span> </p>
          <p>Glass: <span>{glass}</span> </p>
          <p>instructions: <span>{instructions}</span> </p>
          <p>ingredients: <span> { ingredients} </span></p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;

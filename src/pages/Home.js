import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktailData, setCocktailData] = useState([]);

  useEffect(() => {
    setLoading(true)
    const fetchDriks = async () => { 
      try {
        const resp = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await resp.json();
        const { drinks } = data;
        if (drinks) {
          const cocktails = drinks.map((item) => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              item;
            const drink = {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              glass: strGlass,
              type: strAlcoholic,
            };
            return drink;
          });
          setCocktailData(cocktails);
        } else {
          setCocktailData([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    };
    fetchDriks();
  }, [searchTerm]);
  return (
    <main>
      <SearchForm searchTerm={searchTerm} setSearchTerm={ setSearchTerm}/>
      <CocktailList cocktails={cocktailData} loading={loading}/>
    </main>
  );
};

export default Home;

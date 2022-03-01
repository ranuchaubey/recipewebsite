import React, { useState } from "react";
import axios from "axios";
import RecipeTile from "./RecipeTile";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegan");
  const App_id = "18c6b86e";
  const App_key = "5b1fca301ad1a656a5ad155c5ebeb9bd";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}&health=${healthLabel}`;
  async function getRecipes() {
    var result = await axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="app">
      <h1>Food Recipe Plaza 🍕</h1>
      <form className="app__searchform" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="enter ingredients"
          className="app__input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="Search" className="app__submit" />
        <select className="app__healthLabel">
          <option
            onClick={() => {
              setHealthLabel("vegan");
            }}
          >
            Vegan
          </option>
          <option
            onClick={() => {
              setHealthLabel("dairy-free");
            }}
          >
            Dairy-Free
          </option>
          <option
            onClick={() => {
              setHealthLabel("vegetarian");
            }}
          >
            Vegetarian
          </option>
          <option
            onClick={() => {
              setHealthLabel("wheat-free");
            }}
          >
            Wheat-Free
          </option>
          <option
            onClick={() => {
              setHealthLabel("soy-free");
            }}
          >
            Soy-Free
          </option>
          <option
            onClick={() => {
              setHealthLabel("peanut-free");
            }}
          >
            Peanut-free
          </option>
          <option
            onClick={() => {
              setHealthLabel("low-sugar");
            }}
          >
            Low-sugar
          </option>
          <option
            onClick={() => {
              setHealthLabel("tree-nut-free");
            }}
          >
            Tree-nut-Free
          </option>
          <option
            onClick={() => {
              setHealthLabel("egg-free");
            }}
          >
            Egg-Free
          </option>
          <option
            onClick={() => {
              setHealthLabel("fish-free");
            }}
          >
           Fish-free
          </option>
          <option
            onClick={() => {
              setHealthLabel("shellfish-free");
            }}
          >
           shellfish-Free
          </option>
          <option
            onClick={() => {
              setHealthLabel("paleo");
            }}
          >
            Paleo
          </option>
          <option
            onClick={() => {
              setHealthLabel("gluten-free");
            }}
          >
            Gluten-free
          </option>
        </select>
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";
import "./styles.css";
import Recipes from "./Recipes/Recipes";
import {
  allRecipes,
  sugarRecipes,
  summerRecipes,
  dessertRecipes,
  noEggsRecipes,
  chocolateRecipes,
  autumnRecipes,
  veganRecipes,
  chocolateDessertRecipes,
} from "./Recipes/RecipeData";
import { TagList } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";

export default function App() {
  const [filter, setFilter] = useState<string>("all");
  return (
    <div className="App">
      Liste des recettes
      <TagList tags={tagList} />
      <div>
        {tagList.map((item) => {
          return (
            <button
            key={item.id}
              onClick={() => {
                setFilter(String(item.name.en)
              )}}
            >
              {item.name.en}
            </button>
          );
        }
      )}
      </div>
      {filter === "all" && <Recipes recipes={allRecipes} />}
      {filter === "sugar" && <Recipes recipes={sugarRecipes} />}
      {filter === "summer" && <Recipes recipes={summerRecipes} />}
      {filter === "dessert" && <Recipes recipes={dessertRecipes} />}
      {filter === "chocolate dessert" && (
        <Recipes recipes={chocolateDessertRecipes} />
      )}
      {filter === "eggs free" && <Recipes recipes={noEggsRecipes} />}
      {filter === "chocolate" && <Recipes recipes={chocolateRecipes} />}
      {filter === "autumn" && <Recipes recipes={autumnRecipes} />}
      {filter === "vegan" && <Recipes recipes={veganRecipes} />}
    </div>
  );
}

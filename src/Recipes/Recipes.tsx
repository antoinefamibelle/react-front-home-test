import { ListOfRecipes, RecipeType } from "./RecipeType";
import { allRecipes } from "./RecipeData";
import Recipe from "./Recipe";

export const Recipes = ({ filters }: { filters: Array<string> }) => {
  const filteredRecipes = () => {
    let filtered: ListOfRecipes = [];
    allRecipes.forEach((recipe) => {
      let numberOfMatch = 0; // number of tags matching the filters
      recipe.tags.forEach((tag) => {
        if (filters.includes(tag.name.en)) {
          numberOfMatch += 1;
        }
      });
      if (!filtered.includes(recipe) && numberOfMatch === filters.length) {
        filtered.push(recipe);
      }
    });
    if (filters.length === 0) {
      return allRecipes;
    }
    return filtered;
  }
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "whitesmoke",
        borderWidth: "10px",
        borderColor: "black",
        maxWidth: "800px",
      }}
    >
      {filteredRecipes().length === 0 && (
        <div>Aucune recette ne correspond à vos filtres</div>
      )}
      {filteredRecipes().map((recipe) => (
        <Recipe key={recipe.nom} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;

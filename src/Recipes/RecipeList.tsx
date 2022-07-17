import { ListOfRecipes } from "./types/Recipe";
import { allRecipes } from "./data";
import Recipe from ".";
import { ListRecipeContainer } from "./style";

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
    <ListRecipeContainer>
      {filteredRecipes().length === 0 && (
        <div>Aucune recette ne correspond à vos filtres</div>
      )}
      {filteredRecipes().map((recipe) => (
        <Recipe key={recipe.nom} recipe={recipe} />
      ))}
    </ListRecipeContainer>
  );
};

export default Recipes;

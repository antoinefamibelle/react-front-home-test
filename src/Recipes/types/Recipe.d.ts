import { IngredientType } from "../../Ingredients/types/Ingredient";
import { StepType } from "../../Steps/types/Step";
import { IngredientWithQuantityType } from "../../Ingredients/IngredientWithQuantityType";
import { TagType } from "../../Tags/types/Tag";

export type RecipeType = {
  nom: string;
  description: string;
  imageURL: string;
  ingredients?: IngredientType[];
  etapes?: StepType[];
  ingredientsWithQuantity: IngredientWithQuantityType[];
  tags: TagType[];
};

export type ListOfRecipes = RecipeType[];

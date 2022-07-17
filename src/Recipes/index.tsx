import { RecipeType } from "./types/Recipe";
import Steps from "../Steps/StepList";
import { IngredientList } from "../Ingredients/IngredientList";
import { useState } from "react";
import { Tags } from "../Tags/TagList";

import {
  CardContainer,
  Container,
  ImageContainer,
  IngredientContainer,
  RecipeDescription,
  RecipeName,
  StepContainer,
  TagContainer,
} from "./style";

export const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  const [showSteps, setShowSteps] = useState<Boolean>(false);
  const [showIngredients, setShowIngredients] = useState<boolean>(false);
  const imageUrl = `url('${recipe.imageURL}')`;

  return (
    <Container>
      <ImageContainer style={{backgroundImage: imageUrl}} />
      <CardContainer>
        <RecipeName>Nom de la recette: {recipe.nom}</RecipeName>
        <RecipeDescription>
          {recipe.description}
        </RecipeDescription>
        <TagContainer>
          <Tags tags={recipe.tags} />
        </TagContainer>
        <IngredientContainer>
          Ingrédients:
          <button onClick={() => setShowIngredients(!showIngredients)}>
            {showIngredients ? "Masquer" : "Afficher"}
          </button>
          {showIngredients && (
            <IngredientList list={recipe.ingredientsWithQuantity}/>
          )}
        </IngredientContainer>
        <StepContainer>
          Etapes de la recette:
          <button onClick={() => setShowSteps(!showSteps)}>
            {showSteps ? "Masquer" : "Afficher"}
          </button>
          {recipe.etapes && showSteps && <Steps steps={recipe.etapes} />}
        </StepContainer>
      </CardContainer>
    </Container>
  );
};

export default Recipe;

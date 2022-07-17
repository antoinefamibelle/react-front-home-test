import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  box-shadow: 5px 5px 7px 2px rgba(0,0,0,0.76);
  marginTop: 20px;
`;

export const CardContainer = styled.div`
  padding: 10px;
  background-color: lightblue;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 200px;
  width: 70%;
  background-size: cover;
`;

export const RecipeName = styled.h2``;

export const RecipeDescription = styled.div`
  padding: 10px;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const IngredientContainer = styled.div`
  background-color: blanchedalmond;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StepContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
`;

export const ListRecipeContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  border-width: 10px;
  border-color: black;
  max-width: 800px;
`;

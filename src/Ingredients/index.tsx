import { IngredientWithQuantityType } from "./types/Ingredient";

export const Ingredient = ({
  ingredientWithQuantity,
}: {
  ingredientWithQuantity: IngredientWithQuantityType;
}) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {ingredientWithQuantity.quantity}
      {ingredientWithQuantity.unit}
      &nbsp;
      {ingredientWithQuantity.ingredient.prefix}
      &nbsp;
      {!ingredientWithQuantity.unit && ingredientWithQuantity.quantity && ingredientWithQuantity.quantity > 1 ? (
        <span>{ingredientWithQuantity.ingredient.names}</span>
      ) : (
        <span>{ingredientWithQuantity.ingredient.name}</span>
      )}
    </div>
  );
};

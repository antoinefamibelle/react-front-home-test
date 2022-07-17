import { Ingredient } from "./index";
import { IngredientWithQuantityType } from "./types/Ingredient";

export const IngredientList = ({
  list
}: {
  list: IngredientWithQuantityType[];
}) => {
  return (
    <>
      {list.map((obj) => (
        <Ingredient ingredientWithQuantity={obj} />
      ))}
    </>
  );
};

export default IngredientList;

import { IngredientList } from "../Ingredients/IngredientList";
import { StepType } from "./types/Step";

export const Step = ({ etape }: { etape: StepType }) => {
  return (
    <div
      style={{
        backgroundColor: "thistle",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        textAlign: "left",
        padding: "10px",
      }}
    >
      <div>
        {etape.order}. {etape.description}
      </div>
      <div
        style={{
          padding: "10px",
        }}
      >
        {etape.ingredients && (
          <IngredientList
            ingredientsWithQuantity={etape.ingredients}
          />
        )}
      </div>
    </div>
  );
};

export default Step;

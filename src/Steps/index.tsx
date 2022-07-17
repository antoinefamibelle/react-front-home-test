import { IngredientList } from "../Ingredients/IngredientList";
import { Container, PaddingContainer } from "./styles";
import { StepType } from "./types/Step";

export const Step = ({ etape }: { etape: StepType }) => {
  return (
    <Container>
      {etape.order}. {etape.description}
      <PaddingContainer>
        {etape.ingredients && (
          <IngredientList list={etape.ingredients} />
        )}
      </PaddingContainer>
    </Container>
  );
};

export default Step;

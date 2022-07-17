import Step from ".";
import { StepType } from "./types/Step";

export const Steps = ({ steps }: { steps: StepType[] }) => {
  return <>{steps && steps.map((obj) => <Step etape={obj} />)}</>;
};

export default Steps;

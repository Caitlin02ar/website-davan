import { MotionValue } from "framer-motion";
import StepItems from "./StepItems";

type StepComponentProps = {
  progress: MotionValue<number>;
  steps: {
    number: number;
    tag: string;
    title: string;
    description: string;
  }[];
};

export default function StepComponent({
  progress,
  steps,
}: StepComponentProps) {
  return (
    <div
      className="
        flex
        min-h-0
        w-full
        items-start
        pt-4
        pb-12
        px-8
        md:px-16
        md:pt-6
        lg:px-24
        xl:px-32
      "
    >
      <StepItems
        progress={progress}
        steps={steps}
      />
    </div>
  );
}
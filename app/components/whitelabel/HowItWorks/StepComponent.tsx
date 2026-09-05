import { MotionValue } from "framer-motion";
import StepItems from "./StepItems";

type StepComponentProps = {
  progress: MotionValue<number>;
};

export default function StepComponent({
  progress,
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
      <StepItems progress={progress} />
    </div>
  );
}
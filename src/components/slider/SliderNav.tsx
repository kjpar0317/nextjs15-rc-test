import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface SliderNavProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

const SliderNav = ({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
}: Readonly<SliderNavProps>) => {
  return (
    <div className={"space-x-2 flex"}>
      <ToggleGroup type="multiple">
        <ToggleGroupItem
          value="bold"
          aria-label="Toggle bold"
          onClick={onPrev}
          className={cn(
            "transition-all duration-300",
            canGoPrev ? "opacity-100" : "opacity-20 cursor-not-allowed"
          )}
        >
          <IoChevronBackCircleOutline className="h-6 w-6" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bold"
          aria-label="Toggle bold"
          onClick={onNext}
          className={cn(
            "transition-all duration-300",
            canGoNext ? "opacity-100" : "opacity-20 cursor-not-allowed"
          )}
        >
          <IoChevronForwardCircleOutline className="h-6 w-6" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default SliderNav;

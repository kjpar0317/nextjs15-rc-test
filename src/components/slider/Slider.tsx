import { ReactNode } from "react";
import { motion } from "framer-motion";

import useSlider, {
  ResponsiveConfig,
  type SliderConfig,
} from "@/hook/useSlider";
import SliderNav from "./SliderNav";
import SliderPagination from "./SliderPagination";

interface SliderProps {
  config?: SliderConfig;
  responsiveConfig?: ResponsiveConfig[];
  renderItem: (item: any, index: number) => ReactNode;
  data: any[];
}

export default function Slider({
  config,
  responsiveConfig = [],
  renderItem,
  data,
}: Readonly<SliderProps>) {
  const {
    currentSlide,
    canGoNext,
    canGoPrev,
    scrollTo,
    settings,
    setCurrentSlide,
    nextSlide,
    prevSlide,
    setScrollTo,
    slideWidth,
  } = useSlider(data, config, responsiveConfig);

  return (
    <div className={"w-full overflow-x-visible"}>
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: `-${(100 / data.length) * currentSlide}%`,
        }}
        style={{
          width: `${slideWidth < 100 ? 100 : slideWidth}%`,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
      >
        <motion.div
          className={"flex flex-row flex-nowrap"}
          style={{
            marginLeft: `-${settings.spacing}px`,
            marginRight: `-${settings.spacing}px`,
          }}
          onWheel={(e: any) => {
            if (e.deltaX < -1) {
              if (scrollTo) return;
              prevSlide();
              setScrollTo(true);
            } else if (e.deltaX > 1) {
              if (scrollTo) return;
              nextSlide();
              setScrollTo(true);
            } else {
              setScrollTo(false);
            }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e: any, { offset, velocity }: any) => {
            const swipe = Math.abs(offset.x) > 50 && Math.abs(velocity.x) > 500;
            if (swipe && offset.x > 0) prevSlide();
            else if (swipe) nextSlide();
          }}
        >
          {data.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  width: `${100 / settings.slidesToShow}%`,
                  paddingLeft: `${settings.spacing}px`,
                  paddingRight: `${settings.spacing}px`,
                }}
              >
                {renderItem?.(item, index)}
              </div>
            );
          })}
        </motion.div>
      </motion.div>
      <div className={"flex no-wrap items-center  space-x-4 mt-6"}>
        {settings.dots && (
          <SliderPagination
            slides={data.length - settings.slidesToShow + 1}
            onChange={setCurrentSlide}
            activeSlide={currentSlide}
          />
        )}
        {settings.arrows && (
          <div className={"shrink-0"}>
            <SliderNav
              canGoPrev={canGoPrev}
              canGoNext={canGoNext}
              onPrev={prevSlide}
              onNext={nextSlide}
            />
          </div>
        )}
      </div>
    </div>
  );
}

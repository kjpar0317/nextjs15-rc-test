export const animateExpandVariants = {
  init: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      bounce: 0.5,
      delayChildren: 0.5, // 자식요소들에게 delay적용
      staggerChildren: 0.5, // 자식요소들에게 순서대로 증감하는 delay적용
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
  },
};

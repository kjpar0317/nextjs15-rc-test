export const ANIMATE_VARIANTS = {
  expand: {
    init: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
    exit: { opacity: 0, scale: 0.3 },
  },
  onExpand: {
    init: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
    hover: { scale: 1 },
    tap: { scale: 0.5 },
  },
  longer: {
    init: { width: "10px" },
    animate: { width: "100%" },
    transition: { duration: 0.5, origin: 1 },
    hover: { scale: 1 },
    tap: { scale: 0.5 },
    exit: { width: "10px" },
  },
  action: {
    transition: { duration: 0.3 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  },
};

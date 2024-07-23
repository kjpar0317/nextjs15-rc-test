export const ANIMATE_VARIANTS = {
  expand: {
    init: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  },
  onExpand: {
    init: { opacity: 0, scale: 1 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  longer: {
    init: { width: "10px" },
    animate: { width: "100%" },
    transition: { duration: 0.5, origin: 1 },
  },
  action: {
    init: { scale: 1 },
    transition: { duration: 0.3 },
  },
};

export const ANIMATE_COMMON_HOVER = {
  scale: 1.1,
};

export const ANIMATE_LIGHT_HOVER = {
  filter: "brightness(75%)",
  scale: 1.1,
};

export const ANIMATE_DARK_HOVER = {
  filter: "brightness(150%)",
  scale: 1.1,
};

export const ANIMATE_COMMON_TAP = {
  scale: 0.9,
};

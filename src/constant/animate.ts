// 애니메이션 전환 옵션
type TransitionOptions = Partial<{
  type?: string; // 애니메이션의 타입 (e.g., "spring")
  stiffness?: number; // 애니메이션의 경직도
  damping?: number; // 애니메이션의 감쇠
  duration?: number; // 애니메이션의 지속 시간
  ease?: string; // 애니메이션의 이징 함수 (e.g., "easeInOut")
  delay?: number; // 애니메이션의 지연 시간
  origin?: number;
}>;

// Variant: 각 애니메이션 상태 (hidden, visible, exit)의 속성 정의
type Variant = {
  opacity?: number; // 투명도
  width?: number | string;
  height?: number | string;
  filter?: string; // 필터 효과 (e.g., "blur(5px)")
  scale?: number; // 크기 비율 (e.g., 1.5)
  y?: number | string; // Y축 위치 (e.g., 100, "50%")
  rotateY?: number; // Y축 회전 각도 (e.g., 180)
  rotate?: number; // 회전 각도 (e.g., 45)
  scaleX?: number; // X축 크기 비율
  x?: number | string; // X축 위치 (e.g., 100, "50%")
  transition?: TransitionOptions; // 전환 옵션
};

type FramerMotionVariant = {
  init?: Variant;
  animate?: Variant;
  transition?: TransitionOptions;
};

export type ConstantFramerMotionVariant = {
  expand: FramerMotionVariant;
  onExpand: FramerMotionVariant;
  longer: FramerMotionVariant;
  action: FramerMotionVariant;
};

export const ANIMATE_VARIANTS: ConstantFramerMotionVariant = {
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

import { animated, useTransition } from "@react-spring/web";
import { createPortal } from "react-dom";

const Navigation = ({ modal }: { modal: boolean }) => {
  const transitions = useTransition(modal ? [1, 2, 3] : [], {
    from: { x: "-100%" },
    enter: { x: "0%" },
    leave: { x: "100%" },
    config: { duration: 300 },
  });

  return transitions((style, item) => {
    return createPortal(
      <animated.div
        style={style}
        className="w-full absolute top-0 left-0 bg-slate-300 dark:bg-slate-700 min-h-screen z-40"
      >
        {item}
      </animated.div>,
      document.body
    );
  });
};

export default Navigation;

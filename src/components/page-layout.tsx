import { ReactNode } from "react";
import Header from "./header";
import { animated, useSpring } from "@react-spring/web";

type PropsType = {
  children: ReactNode;
};

const PageLayout = ({ children }: PropsType) => {
  const animation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 500,
    config: {
      duration: 2000,
    },
  });

  return (
    <animated.div
      style={animation}
      className="flex-1 flex flex-col w-full h-full"
    >
      <Header />
      <main className="p-5 flex-1">{children}</main>
    </animated.div>
  );
};

export default PageLayout;

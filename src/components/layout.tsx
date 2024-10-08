import Header from "./header";
import { animated, useSpring } from "@react-spring/web";
import { Outlet } from "react-router-dom";

const Layout = () => {
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
    <animated.div style={animation} className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex justify-center items-center">
        {<Outlet />}
      </main>
    </animated.div>
  );
};

export default Layout;

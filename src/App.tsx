import Header from "./components/header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const App = () => {
  return (
    <Parallax pages={3} style={{ top: "0", left: "0" }}>
      <ParallaxLayer sticky={{ start: 0, end: 3 }}>
        <Header />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2.5}>
        <p>Parallax 2</p>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={2.5}>
        <p>Parallax 3</p>
      </ParallaxLayer>
    </Parallax>
  );
};

export default App;

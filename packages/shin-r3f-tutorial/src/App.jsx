import { Image, Scroll, ScrollControls } from "@react-three/drei";
import "./App.css";
import { Canvas, useThree } from "@react-three/fiber";

function Images() {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <group>
      <Image url="./img1.jpg" scale={[4, height, 1]} position={[-1, 0, 1]} />
      <Image url="./img2.jpg" scale={3} position={[2, 0, 1]} />
      <Image
        url="./img3.jpg"
        scale={[1, 3.5, 1]}
        position={[-2.3, -height, 2]}
      />
      <Image
        url="./img4.jpg"
        scale={[1.4, 2, 1]}
        position={[1.3, -height - 0.3, 3.2]}
      />
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <ScrollControls pages={2} damping={1}>
        <Scroll>
          <Images />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;

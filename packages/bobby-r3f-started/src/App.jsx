import { TextureLoader } from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import "./App.css";
import { OrbitControls } from "@react-three/drei";

function Box() {
  const ref = useRef();
  const rate = 0.01;

  const [matcap] = useLoader(TextureLoader, ["./img2.jpg"]);

  useFrame(() => {
    ref.current.rotation.x += rate;
    ref.current.rotation.y += rate;
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.4, 256, 32]} />
      <meshMatcapMaterial color={0xffff88} matcap={matcap} />
    </mesh>
  );
}

function App() {
  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <color attach="background" args={["lightblue"]} />
          <Box />
          {/* <hemisphereLight color={0xffffff} groundColor={0x404040} /> */}
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;

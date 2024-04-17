"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props:any) {
  const { scene } = useGLTF("/car_engine.glb");
  return <primitive object={scene} {...props} />
}

function App() {
  return (
    <Canvas dpr={[1,2]} shadows camera={{ fov: 90 }} style={{"position": "absolute"}}>
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={"warehouse"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default App;
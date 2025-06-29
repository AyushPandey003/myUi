import { Canvas } from "@react-three/fiber";
import { OrbitControls,Html } from "@react-three/drei";
import { Bloom, ToneMapping } from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";

import "./styles.css";
import Scene from "./scene";

const CircularCarousel = () => {

  
  return (
    <Canvas camera={{ fov: 35 }}  >
      <OrbitControls />
      <ambientLight intensity={0.9} />
      {/* <Scene texturepath="./Frame 1.png" /> */}
      <group position={[0, 0, 0]}>
        <Scene texturepath="./Frame 1.png" />
      </group>

      <group position={[0, -2, 0]}>
        <Scene texturepath="./Group 2.png" />
      </group>
      <EffectComposer>
        <Bloom
          intensity={5.0} 
          luminanceThreshold={0} 
          luminanceSmoothing={0} 
        />
        <ToneMapping adaptive={true} />
      </EffectComposer>
      <Html 
  position={[0, 1, 0]}
  transform
  style={{
    pointerEvents: 'none',
    color: '#ffcc00', 
    fontSize: '0.75vw', 
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
    fontFamily: 'Cursive', 
    padding: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', 
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', 
    zIndex: 1,
  }}
>
  <div>Happy Birthday, <br/> माँ (Maa) & Nanu!</div>
</Html>


    </Canvas>
  );
};

export default CircularCarousel;

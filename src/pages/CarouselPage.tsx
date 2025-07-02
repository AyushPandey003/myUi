import ComponentPage from "../components/ui/ComponentPage";
import CircularCarousel from "../components/ui/3DCarousel/circularCarouselcopy";

const carouselCode = `import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom, ToneMapping } from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";
import Scene from "./scene";

const CircularCarousel = () => {
  return (
    <Canvas className="bg-transparent" camera={{ fov: 35 }}>
      <OrbitControls />
      <ambientLight intensity={0.9} />
      <group position={[0, 0, 0]}>
        <Scene texturepath="/Group 1.png" />
      </group>
      <EffectComposer>
        <Bloom intensity={5.0} luminanceThreshold={0} luminanceSmoothing={0} />
        <ToneMapping adaptive={true} />
      </EffectComposer>
    </Canvas>
  );
};`;

const CarouselPage = () => {
  return (
    <ComponentPage
      title="3D Circular Carousel"
      description="An interactive 3D carousel component."
      component={<CircularCarousel />}
      code={carouselCode}
    />
  );
};

export default CarouselPage;

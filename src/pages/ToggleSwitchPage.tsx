// pages/toggle-switch.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ComponentPage from '../components/ui/ComponentPage';
import ToggleSwitch3D from '../components/ui/ToggleSwitch3D';

const ToggleSwitch3DWrapper = () => {
  return (
    <div className="h-64 w-full sm:h-80 lg:h-96">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ToggleSwitch3D 
          position={[0, 0, 0]}
          size={[2, 0.5, 0.2]}
          initialOn={false}
          onToggle={(on) => console.log('Toggle switched:', on)}
        />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

const codeString = `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ToggleSwitch3D from './ToggleSwitch3D';

function App() {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ToggleSwitch3D 
          position={[0, 0, 0]}
          size={[2, 0.5, 0.2]}
          initialOn={false}
          onToggle={(on) => console.log('Toggle switched:', on)}
        />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}`;

const ToggleSwitch3dPage = () => {
  return (
    <ComponentPage
      title="3D Toggle Switch"
      description="An interactive 3D toggle switch with smooth animations and hover effects."
      component={<ToggleSwitch3DWrapper />}
      code={codeString}
    />
  );
};

export default ToggleSwitch3dPage;

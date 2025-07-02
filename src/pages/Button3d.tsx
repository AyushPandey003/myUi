import ComponentPage from "../components/ui/ComponentPage";
import Button3D from "../components/ui/Button3D";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Button3DWrapper = () => {
  return (
    <div className="h-64 w-full sm:h-80 lg:h-96">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Button3D 
          position={[0, 0, 0]}
          size={[2, 0.8, 0.3]}
          label="Click Me!"
          onClick={() => console.log('3D Button clicked!')}
        />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

const buttonCode = `import React, { useRef, useEffect } from 'react';
import type { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Text } from '@react-three/drei';
import type { ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface Button3DProps {
  position?: [number, number, number];
  size?: [number, number, number];
  label?: string;
  onClick?: () => void;
}

const Button3D: FC<Button3DProps> = ({
  position = [0, 0, 0],
  size = [1.5, 0.5, 0.2],
  label = 'Click Me',
  onClick = () => {},
}) => {
  const groupRef = useRef<THREE.Group>(null!);
  const boxRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>>(null!);
  const textRef = useRef<THREE.Mesh>(null!);

  // Idle floating animation
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(groupRef.current.position, {
      y: position[1] + 0.05,
      duration: 1.5,
      ease: 'sine.inOut',
    });
    return () => { tl.kill(); };
  }, [position]);

  // Hover effects
  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    gsap.to(boxRef.current.material.color, { r: 0.2, g: 0.6, b: 1, duration: 0.3 });
    gsap.to((textRef.current.material as THREE.MeshBasicMaterial).color, { r: 1, g: 1, b: 1, duration: 0.3 });
    document.body.style.cursor = 'pointer';
  };
  
  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    gsap.to(boxRef.current.material.color, { r: 0.1, g: 0.1, b: 0.3, duration: 0.3 });
    gsap.to((textRef.current.material as THREE.MeshBasicMaterial).color, { r: 0.866, g: 0.866, b: 0.866, duration: 0.3 });
    document.body.style.cursor = 'auto';
  };

  // Click effect
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    gsap.fromTo(
      groupRef.current.scale,
      { x: 1, y: 1, z: 1 },
      { x: 0.9, y: 0.9, z: 0.9, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' }
    );
    onClick();
  };

  return (
    <group ref={groupRef} position={new THREE.Vector3(...position)}>
      <RoundedBox
        ref={boxRef}
        args={size}
        radius={0.05}
        smoothness={4}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <meshStandardMaterial color="#1a1a3d" />
      </RoundedBox>

      <Text
        ref={textRef as React.RefObject<THREE.Mesh>}
        position={[0, 0, size[2] / 2 + 0.01]}
        fontSize={0.2}
        color="#ddd"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

// Wrapper component with Canvas
const Button3DWrapper = () => {
  return (
    <div className="h-64 w-full sm:h-80 lg:h-96">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Button3D 
          position={[0, 0, 0]}
          size={[2, 0.8, 0.3]}
          text="Click Me!"
          onClick={() => console.log('3D Button clicked!')}
        />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Button3D;
`;
const Button3dPage = () => {
  return (
    <ComponentPage
      title="3D Button"
      description="A customizable 3D button component with hover and click effects."
      component={<Button3DWrapper />}
      code={buttonCode}
    />
  );
};
export default Button3dPage;
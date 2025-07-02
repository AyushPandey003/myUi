import type { FC } from 'react';
import { useRef, useState, useEffect } from 'react';
import type { ThreeEvent } from '@react-three/fiber';
import { RoundedBox, Float, Center, Text3D } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface ToggleSwitch3DProps {
  /** Position of the switch in [x, y, z] */
  position?: [number, number, number];
  /** Dimensions of the track [width, height, depth] */
  size?: [number, number, number];
  /** Initial state of the switch */
  initialOn?: boolean;
  /** Callback when toggled */
  onToggle?: (on: boolean) => void;
}

const ToggleSwitch3D: FC<ToggleSwitch3DProps> = ({
  position = [0, 0, 0],
  size = [1.5, 0.4, 0.15],
  initialOn = false,
  onToggle = () => {},
}) => {
  const trackRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>>(null!);
  const knobRef = useRef<THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>>(null!);
  const [isOn, setIsOn] = useState(initialOn);

  const half = (size[0] - size[2]) / 2;

  // Toggle animations
  useEffect(() => {
    const targetX = isOn ? half : -half;
    gsap.to(knobRef.current.position, { x: targetX, duration: 0.4, ease: 'elastic.out(1, 0.6)' });
    gsap.to(trackRef.current.material.color, {
      r: isOn ? 0.2 : 0.5,
      g: isOn ? 0.8 : 0.5,
      b: isOn ? 0.2 : 0.5,
      duration: 0.3,
    });
    gsap.to(trackRef.current.material, { emissiveIntensity: isOn ? 0.4 : 0, duration: 0.3 });
  }, [isOn, half]);

  // Hover animations
  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    gsap.to(knobRef.current.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.2 });
    gsap.to(trackRef.current.material, { emissiveIntensity: 0.1, duration: 0.2 });
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    gsap.to(knobRef.current.scale, { x: 1, y: 1, z: 1, duration: 0.2 });
    gsap.to(trackRef.current.material, { emissiveIntensity: isOn ? 0.4 : 0, duration: 0.2 });
  };
  // Click handler
  const handleClick = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsOn((prev) => {
      onToggle(!prev);
      return !prev;
    });
  };

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={new THREE.Vector3(...position)}>
        {/* Track */}
        <RoundedBox
          ref={trackRef}
          args={size}
          radius={size[1] / 2}
          smoothness={12}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={handleClick}
        >
          <meshStandardMaterial
            attach="material"
            color={new THREE.Color(isOn ? '#2ecc71' : '#888888')}
            emissive={new THREE.Color('#000000')}
            metalness={0.3}
            roughness={0.4}
          />
        </RoundedBox>

        {/* Knob */}
        <mesh
          ref={knobRef}
          position={[isOn ? half : -half, 0, size[2] / 2 + 0.005]}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={handleClick}
        >
          <sphereGeometry attach="geometry" args={[size[1] * 0.9, 32, 32]} />
          <meshStandardMaterial attach="material" color="#ffffff" metalness={0.5} roughness={0.2} />
        </mesh>

        {/* Labels */}
        <Center position={[-size[0] / 2 - 0.3, 0, size[2] / 2 + 0.02]}>
          <Text3D
            font="https://cdn.jsdelivr.net/npm/three@0.152.2/examples/fonts/helvetiker_regular.typeface.json"
            size={0.15}
            height={0.02}
            curveSegments={12}
          >
            Off
            <meshStandardMaterial attach="material" color={isOn ? '#555555' : '#ffffff'} />
          </Text3D>
        </Center>

        <Center position={[size[0] / 2 + 0.3, 0, size[2] / 2 + 0.02]}>
          <Text3D
            font="https://cdn.jsdelivr.net/npm/three@0.152.2/examples/fonts/helvetiker_regular.typeface.json"
            size={0.15}
            height={0.02}
            curveSegments={12}
          >
            On
            <meshStandardMaterial attach="material" color={isOn ? '#ffffff' : '#555555'} />
          </Text3D>
        </Center>
      </group>
    </Float>
  );
};

export default ToggleSwitch3D;


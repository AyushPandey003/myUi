import ComponentPage from "../components/ui/ComponentPage";
import { Slider3D } from "../components/root/Slider3d";
import { Canvas } from "@react-three/fiber";

const sliderCode = `
import { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Slider3DProps {
  position?: [number, number, number];
  min?: number;
  max?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
  onLoaded?: () => void;
}

export const Slider3D = ({
  position = [0, 0, 0],
  min = 0,
  max = 100,
  initialValue = 50,
  onChange,
  onLoaded,
}: Slider3DProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const sliderRef = useRef<THREE.Mesh>(null);

  const [value, setValue] = useState(initialValue);
  const [isDragging, setIsDragging] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Shared geometry & material
  const sphereGeo = useMemo(() => new THREE.SphereGeometry(0.2, 32, 32), []);
  const handleMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        metalness: 0.1,
        roughness: 0.1,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        emissive: new THREE.Color('#7c3aed'),
      }),
    []
  );
  const trackMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#374151',
        metalness: 0.2,
        roughness: 0.4,
      }),
    []
  );
  const activeMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#7c3aed',
        metalness: 0.1,
        roughness: 0.2,
        emissive: new THREE.Color('#7c3aed'),
        emissiveIntensity: 0.1,
      }),
    []
  );

  // Preallocate vector for scale lerp
  const targetScale = useMemo(() => new THREE.Vector3(), []);

  // Trigger onLoaded once
  useEffect(() => {
    onLoaded?.();
  }, [onLoaded]);

  const normalizedValue = useMemo(() => (value - min) / (max - min), [value, min, max]);
  const sliderPosition = useMemo(() => (normalizedValue - 0.5) * 2, [normalizedValue]);

  useFrame((state) => {
    // Floating animation
    if (groupRef.current) {
      groupRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 1.8 + 2) * 0.12;
    }

    if (sliderRef.current) {
      // Smooth slider movement
      sliderRef.current.position.x = THREE.MathUtils.lerp(
        sliderRef.current.position.x,
        sliderPosition,
        0.15
      );

      // Scale effect
      const scaleValue = hovered || isDragging ? 1.2 : 1;
      targetScale.setScalar(scaleValue);
      sliderRef.current.scale.lerp(targetScale, 0.1);

      // Update material emissive intensity
      handleMat.emissiveIntensity = hovered || isDragging ? 0.2 : 0.1;
    }
  });

  const handlePointerMove = useCallback(
    (event: import('@react-three/fiber').ThreeEvent<PointerEvent>) => {
      if (!isDragging) return;
      const x = THREE.MathUtils.clamp((event.point.x + 1) / 2, 0, 1);
      const newValue = Math.round(min + x * (max - min));
      setValue(newValue);
      onChange?.(newValue);
    },
    [isDragging, min, max, onChange]
  );

  return (
    <group ref={groupRef} position={position}>
      {/* Slider track */}
      <RoundedBox args={[2.5, 0.15, 0.15]} radius={0.075} smoothness={8}>
        <primitive object={trackMat} attach="material" />
      </RoundedBox>

      {/* Active track */}
      <RoundedBox
        position={[sliderPosition / 2 - 1.25 + (sliderPosition + 1.25) / 2, 0, 0.01]}
        args={[sliderPosition + 1.25, 0.1, 0.1]}
        radius={0.05}
        smoothness={8}
      >
        <primitive object={activeMat} attach="material" />
      </RoundedBox>

      {/* Slider handle */}
      <mesh
        ref={sliderRef}
        geometry={sphereGeo}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
        onPointerMove={handlePointerMove}
      >
        <primitive object={handleMat} attach="material" />
      </mesh>

      {/* Value display */}
      <Text position={[0, -0.6, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
        {value}%
      </Text>
    </group>
  );
};
`;

const SliderPage = () => {
  return (
    <ComponentPage
      title="3D Slider"
      description="A sleek and interactive 3D slider component."
      component={
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Slider3D />
        </Canvas>
      }
      code={sliderCode}
    />
  );
};

export default SliderPage;

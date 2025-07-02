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

  const normalizedValue = useMemo(() => (value - min) / (max - min), [value, min, max]);
  const sliderPosition = useMemo(() => (normalizedValue - 0.5) * 2.5, [normalizedValue]);

  const sphereGeo = useMemo(() => new THREE.SphereGeometry(0.25, 48, 48), []);
  const handleMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#8b5cf6'),
        emissive: new THREE.Color('#a78bfa'),
        emissiveIntensity: 0.3,
        roughness: 0.2,
        metalness: 0.6,
      }),
    []
  );
  const trackMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#1f2937',
        metalness: 0.3,
        roughness: 0.6,
      }),
    []
  );
  const activeMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#7c3aed',
        emissive: new THREE.Color('#c084fc'),
        emissiveIntensity: 0.2,
        metalness: 0.4,
        roughness: 0.3,
      }),
    []
  );

  const targetScale = useMemo(() => new THREE.Vector3(), []);

  useEffect(() => {
    onLoaded?.();
  }, [onLoaded]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }

    if (sliderRef.current) {
      sliderRef.current.position.x = THREE.MathUtils.lerp(
        sliderRef.current.position.x,
        sliderPosition,
        0.2
      );

      const scale = hovered || isDragging ? 1.3 : 1;
      targetScale.setScalar(scale);
      sliderRef.current.scale.lerp(targetScale, 0.1);

      handleMat.emissiveIntensity = hovered || isDragging ? 0.6 : 0.3;
    }
  });

  const handlePointerMove = useCallback(
    (event: import('@react-three/fiber').ThreeEvent<PointerEvent>) => {
      if (!isDragging) return;
      const x = THREE.MathUtils.clamp((event.point.x + 1.25) / 2.5, 0, 1);
      const newValue = Math.round(min + x * (max - min));
      setValue(newValue);
      onChange?.(newValue);
    },
    [isDragging, min, max, onChange]
  );

  return (
    <group ref={groupRef} position={position}>
      {/* Track base */}
      <RoundedBox args={[2.5, 0.2, 0.2]} radius={0.1} smoothness={4}>
        <primitive object={trackMat} attach="material" />
      </RoundedBox>

      {/* Active filled track */}
      <RoundedBox
        position={[
          sliderPosition / 2 - 1.25 + (sliderPosition + 1.25) / 2,
          0,
          0.02,
        ]}
        args={[sliderPosition + 1.25, 0.12, 0.12]}
        radius={0.06}
        smoothness={4}
      >
        <primitive object={activeMat} attach="material" />
      </RoundedBox>

      {/* Handle */}
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

      {/* Value label (floating above) */}
      <Text
        position={[sliderPosition, 0.6, 0]}
        fontSize={0.25}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineColor="#000"
        outlineWidth={0.01}
      >
        {value}%
      </Text>
    </group>
  );
};

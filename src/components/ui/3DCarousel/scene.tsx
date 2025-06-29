
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const Scene = ({ texturepath }: { texturepath: string }) => {
const tex= useTexture(texturepath);
const cyl=useRef<THREE.Mesh>(null);
useFrame((_, delta: number) => {
  cyl.current!.rotation.y +=delta;
}
)
return (
    <group rotation={[0,1.4,0.5]}>
       <mesh ref={cyl} >
        <cylinderGeometry args={[1,1,1, 20, 60, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide}/>
      </mesh>
    </group>
  )
}

export default Scene;

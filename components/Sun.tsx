import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { type Mesh, TextureLoader } from "three";

interface SunProps {
  timeSpeed: number;
}

export default function Sun({ timeSpeed }: SunProps) {
  const meshRef = useRef<Mesh>(null!);
  const texture = useLoader(
    TextureLoader,
    "/sun.svg?height=400&width=400&text=Sun"
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.004 * timeSpeed;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

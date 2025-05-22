import { useLoader } from "@react-three/fiber";
import { TextureLoader, BackSide } from "three";

export default function Skybox() {
  const texture = useLoader(
    TextureLoader,
    "https://i.ibb.co/BH8gHPvj/2k-stars-milky-way.jpg"
  );

  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={BackSide} />
    </mesh>
  );
}

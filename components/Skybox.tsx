import { useLoader } from "@react-three/fiber";
import { TextureLoader, BackSide } from "three";

export default function Skybox() {
  const texture = useLoader(
    TextureLoader,
    "/gla.svg?height=2000&width=4000&text=Starfield"
  );

  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={BackSide} />
    </mesh>
  );
}

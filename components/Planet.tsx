import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, TextureLoader } from "three";

interface MoonProps {
  name: string;
  size: number;
  distance: number;
  textureMap: string;
}

interface RingsProps {
  innerRadius: number;
  outerRadius: number;
  textureMap: string;
}

interface PlanetProps {
  name: string;
  position: [number, number, number];
  size: number;
  textureMap: string;
  orbitRadius: number;
  timeSpeed: number;
  moons?: MoonProps[];
  rings?: RingsProps;
}

export default function Planet({
  position,
  size,
  textureMap,
  orbitRadius,
  timeSpeed,
  moons,
  rings,
}: PlanetProps) {
  const meshRef = useRef<Mesh>(null!);
  const orbitRef = useRef<Mesh>(null!);
  const texture = useLoader(TextureLoader, textureMap);

  useFrame(({ clock }) => {
    if (meshRef.current && orbitRef.current) {
      const elapsedTime = clock.getElapsedTime();
      const speed = (1 / orbitRadius) * timeSpeed;
      meshRef.current.position.x = Math.cos(elapsedTime * speed) * orbitRadius;
      meshRef.current.position.z = Math.sin(elapsedTime * speed) * orbitRadius;
      meshRef.current.rotation.y += 0.02 * timeSpeed;
      orbitRef.current.rotation.y = elapsedTime * speed;
    }
  });

  return (
    <group>
      {/* Sunlight for a bright Sun */}
      <pointLight position={[0, 0, 0]} intensity={5} color="yellow" />

      {/* Reduced ambient and directional lighting for dimmer planets */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />

      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={texture} roughness={0.98} metalness={0.02} />
        {moons &&
          moons.map((moon, index) => (
            <Moon
              key={index}
              {...moon}
              parentSize={size}
              timeSpeed={timeSpeed}
            />
          ))}
        {rings && <Rings {...rings} parentSize={size} />}
      </mesh>
      <mesh ref={orbitRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitRadius, orbitRadius + 0.1, 64]} />
        <meshBasicMaterial color="#cccccc" opacity={0.5} transparent={true} />
      </mesh>
    </group>
  );
}

function Moon({
  size,
  distance,
  textureMap,
  parentSize,
  timeSpeed,
}: MoonProps & { parentSize: number; timeSpeed: number }) {
  const moonRef = useRef<Mesh>(null!);
  const texture = useLoader(TextureLoader, textureMap);

  useFrame(({ clock }) => {
    if (moonRef.current) {
      const elapsedTime = clock.getElapsedTime();
      const speed = 0.5 * timeSpeed;
      moonRef.current.position.x =
        Math.cos(elapsedTime * speed) * (parentSize + distance);
      moonRef.current.position.z =
        Math.sin(elapsedTime * speed) * (parentSize + distance);
      moonRef.current.rotation.y += 0.02 * timeSpeed;
    }
  });

  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial map={texture} roughness={0.98} metalness={0.02} />
    </mesh>
  );
}

function Rings({
  innerRadius,
  outerRadius,
  textureMap,
  parentSize,
}: RingsProps & { parentSize: number }) {
  const texture = useLoader(TextureLoader, textureMap);

  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry
        args={[innerRadius * parentSize, outerRadius * parentSize, 64]}
      />
      <meshBasicMaterial
        map={texture}
        side={2}
        transparent={true}
        opacity={0.6} // Slightly darker rings
      />
    </mesh>
  );
}

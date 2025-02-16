"use client";

import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TimelineSlider from "@/components/TimelineSlider";

const Sun = dynamic(() => import("@/components/Sun"), { ssr: false });
const Planet = dynamic(() => import("@/components/Planet"), { ssr: false });
const InfoPanel = dynamic(() => import("@/components/InfoPanel"), {
  ssr: false,
});
const Skybox = dynamic(() => import("@/components/Skybox"), { ssr: false });

export default function Home() {
  const [timeSpeed, setTimeSpeed] = useState(1);

  return (
    <main className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
        <Suspense fallback={null}>
          <Skybox />
          <ambientLight intensity={0.1} />
          <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" />
          <Stars
            radius={300}
            depth={60}
            count={20000}
            factor={7}
            saturation={0}
          />
          <Sun timeSpeed={timeSpeed} />
          <Planet
            name="Mercury"
            position={[4, 0, 0]}
            size={0.4}
            textureMap="/mercy.svg?height=200&width=200&text=Mercury"
            orbitRadius={4}
            timeSpeed={timeSpeed}
          />
          <Planet
            name="Venus"
            position={[7, 0, 0]}
            size={0.9}
            textureMap="/veni.svg?height=200&width=200&text=Venus"
            orbitRadius={7}
            timeSpeed={timeSpeed}
          />
          <Planet
            name="Earth"
            position={[10, 0, 0]}
            size={1}
            textureMap="/duniya.svg?height=200&width=200&text=Earth"
            orbitRadius={10}
            timeSpeed={timeSpeed}
            moons={[
              {
                name: "Moon",
                size: 0.27,
                distance: 2,
                textureMap: "/chad.svg?height=100&width=100&text=Moon",
              },
            ]}
          />
          <Planet
            name="Mars"
            position={[13, 0, 0]}
            size={0.5}
            textureMap="/mars.svg?height=200&width=200&text=Mars"
            orbitRadius={13}
            timeSpeed={timeSpeed}
            moons={[
              {
                name: "Phobos",
                size: 0.1,
                distance: 1,
                textureMap: "/phobos.svg?height=50&width=50&text=Phobos",
              },
              {
                name: "Deimos",
                size: 0.08,
                distance: 1.5,
                textureMap: "/deimos.svg?height=50&width=50&text=Deimos",
              },
            ]}
          />
          <Planet
            name="Jupiter"
            position={[18, 0, 0]}
            size={2.2}
            textureMap="/jupiter.svg?height=200&width=200&text=Jupiter"
            orbitRadius={18}
            timeSpeed={timeSpeed}
            moons={[
              {
                name: "Io",
                size: 0.2,
                distance: 3,
                textureMap: "/IO.svg?height=100&width=100&text=Io",
              },
              {
                name: "Europa",
                size: 0.18,
                distance: 3.5,
                textureMap: "/Europa.svg?height=100&width=100&text=Europa",
              },
              {
                name: "Ganymede",
                size: 0.25,
                distance: 4,
                textureMap: "/Gany.svg?height=100&width=100&text=Ganymede",
              },
              {
                name: "Callisto",
                size: 0.24,
                distance: 4.5,
                textureMap: "/pod.svg?height=100&width=100&text=Callisto",
              },
            ]}
          />
          <Planet
            name="Saturn"
            position={[23, 0, 0]}
            size={2}
            textureMap="/pod.svg?height=200&width=200&text=Saturn"
            orbitRadius={23}
            timeSpeed={timeSpeed}
            rings={{
              innerRadius: 2.3,
              outerRadius: 3.5,
              textureMap: "/pod.svg?height=400&width=400&text=Saturn+Rings",
            }}
          />
          <Planet
            name="Uranus"
            position={[28, 0, 0]}
            size={1.6}
            textureMap="/pod.svg?height=200&width=200&text=Uranus"
            orbitRadius={28}
            timeSpeed={timeSpeed}
          />
          <Planet
            name="Neptune"
            position={[32, 0, 0]}
            size={1.5}
            textureMap="/pod.svg?height=200&width=200&text=Neptune"
            orbitRadius={32}
            timeSpeed={timeSpeed}
          />
          <OrbitControls enablePan={false} />
        </Suspense>
      </Canvas>
      <InfoPanel />
      <TimelineSlider timeSpeed={timeSpeed} setTimeSpeed={setTimeSpeed} />
    </main>
  );
}

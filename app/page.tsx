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
            textureMap="https://i.ibb.co/35KrVh6g/2k-sun.jpg"
            orbitRadius={4}
            timeSpeed={timeSpeed}
          />
          <Planet
            name="Venus"
            position={[7, 0, 0]}
            size={0.9}
            textureMap="https://i.ibb.co/SwgjDcK3/2k-venus-surface.jpg"
            orbitRadius={7}
            timeSpeed={timeSpeed}
          />
          <Planet
            name="Earth"
            position={[10, 0, 0]}
            size={1}
            textureMap="https://i.ibb.co/23fYxy4q/2k-earth-daymap.jpg"
            orbitRadius={10}
            timeSpeed={timeSpeed}
            moons={[
              {
                name: "Moon",
                size: 0.27,
                distance: 2,
                textureMap: "https://i.ibb.co/20z77D1g/2k-moon.jpg",
              },
            ]}
          />
          <Planet
            name="Mars"
            position={[13, 0, 0]}
            size={0.5}
            textureMap="https://i.ibb.co/zH4rfNz0/2k-mars.jpg"
            orbitRadius={13}
            timeSpeed={timeSpeed}
            moons={[
              {
                name: "Phobos",
                size: 0.1,
                distance: 1,
                textureMap: "https://i.ibb.co/ccHrBWD0/2k-earth-clouds.jpg",
              },
              {
                name: "Deimos",
                size: 0.08,
                distance: 1.5,
                textureMap: "https://i.ibb.co/BVVR30k9/2k-earth-nightmap.jpg",
              },
            ]}
          />
          <Planet
            name="Jupiter"
            position={[18, 0, 0]}
            size={2.2}
            textureMap="https://i.ibb.co/ZwXYyCq/2k-jupiter.jpg"
            orbitRadius={18}
            timeSpeed={timeSpeed}
            moons={[
              {
                name: "Io",
                size: 0.2,
                distance: 3,
                textureMap: "https://i.ibb.co/CsnWzy5r/2k-ceres-fictional.jpg",
              },
              {
                name: "Europa",
                size: 0.18,
                distance: 3.5,
                textureMap: "https://i.ibb.co/qL8MYF5n/2k-eris-fictional.jpg",
              },
              {
                name: "Ganymede",
                size: 0.25,
                distance: 4,
                textureMap: "https://i.ibb.co/whcWjYff/2k-haumea-fictional.jpg",
              },
              {
                name: "Callisto",
                size: 0.24,
                distance: 4.5,
                textureMap:
                  "https://i.ibb.co/DgPyZ3w3/2k-makemake-fictional.jpg",
              },
            ]}
          />
          <Planet
            name="Saturn"
            position={[23, 0, 0]}
            size={2}
            textureMap="https://i.ibb.co/nMMLRRNP/2k-saturn.jpg"
            orbitRadius={23}
            timeSpeed={timeSpeed}
            rings={{
              innerRadius: 2.3,
              outerRadius: 3.5,
              textureMap: "https://i.ibb.co/rGG45CVC/2k-saturn-ring-alpha.png",
            }}
          />
          <Planet
            name="Uranus"
            position={[28, 0, 0]}
            size={1.6}
            textureMap="https://i.ibb.co/5XgZ7Rwk/2k-uranus.jpg"
            orbitRadius={28}
            timeSpeed={timeSpeed}
          />
          <Planet
            name="Neptune"
            position={[32, 0, 0]}
            size={1.5}
            textureMap="https://i.ibb.co/vCj8fxnh/2k-neptune.jpg"
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

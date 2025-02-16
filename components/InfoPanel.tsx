"use client";

import { useState } from "react";

const planetInfo = {
  Sun: "The Sun is the star at the center of the Solar System.",
  Mercury:
    "Mercury is the smallest planet in the Solar System and the closest to the Sun.",
  Venus:
    "Venus is the second planet from the Sun and is Earth's closest planetary neighbor.",
  Earth:
    "Earth is the third planet from the Sun and the only astronomical object known to harbor life. It has one moon.",
  Mars: "Mars is the fourth planet from the Sun and is often described as the 'Red Planet'. It has two moons: Phobos and Deimos.",
  Jupiter:
    "Jupiter is the largest planet in the Solar System and the fifth from the Sun. It has 79 known moons, with the four largest being Io, Europa, Ganymede, and Callisto.",
  Saturn:
    "Saturn is the sixth planet from the Sun and is known for its prominent ring system. It has 82 known moons, with Titan being the largest.",
  Uranus:
    "Uranus is the seventh planet from the Sun and has a tilted axis of rotation. It has 27 known moons.",
  Neptune:
    "Neptune is the eighth and farthest known planet from the Sun in the Solar System. It has 14 known moons, with Triton being the largest.",
};

export default function InfoPanel() {
  const [selectedPlanet, setSelectedPlanet] = useState("Sun");

  return (
    <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
      <h2 className="text-2xl font-bold mb-2">{selectedPlanet}</h2>
      <p>{planetInfo[selectedPlanet as keyof typeof planetInfo]}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {Object.keys(planetInfo).map((planet) => (
          <button
            key={planet}
            onClick={() => setSelectedPlanet(planet)}
            className={`px-3 py-1 rounded ${
              selectedPlanet === planet ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            {planet}
          </button>
        ))}
      </div>
    </div>
  );
}

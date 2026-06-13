"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// --- HERO BACKGROUND NEURAL NETWORK ---
function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const lineSegmentsRef = useRef<THREE.LineSegments>(null);
  
  const count = 70;
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);

  // Initialize particles positions & velocities
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;

    velocities[i * 3] = (Math.random() - 0.5) * 0.008;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.008;
  }

  useFrame((state) => {
    if (!pointsRef.current || !lineSegmentsRef.current) return;

    const points = pointsRef.current;
    const lines = lineSegmentsRef.current;
    const posAttr = points.geometry.attributes.position as THREE.BufferAttribute;

    // Update positions based on velocities
    for (let i = 0; i < count; i++) {
      let x = posAttr.getX(i) + velocities[i * 3];
      let y = posAttr.getY(i) + velocities[i * 3 + 1];
      let z = posAttr.getZ(i) + velocities[i * 3 + 2];

      // Boundary check
      if (Math.abs(x) > 6) velocities[i * 3] *= -1;
      if (Math.abs(y) > 6) velocities[i * 3 + 1] *= -1;
      if (Math.abs(z) > 6) velocities[i * 3 + 2] *= -1;

      posAttr.setXYZ(i, x, y, z);
    }
    posAttr.needsUpdate = true;

    // Draw lines between close particles
    const linePositions: number[] = [];
    const positionsArray = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const x1 = positionsArray[i * 3];
      const y1 = positionsArray[i * 3 + 1];
      const z1 = positionsArray[i * 3 + 2];

      for (let j = i + 1; j < count; j++) {
        const x2 = positionsArray[j * 3];
        const y2 = positionsArray[j * 3 + 1];
        const z2 = positionsArray[j * 3 + 2];

        const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);

        if (dist < 2.8) {
          linePositions.push(x1, y1, z1, x2, y2, z2);
        }
      }
    }

    const lineGeo = lines.geometry;
    lineGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    if (lineGeo.attributes.position) {
      lineGeo.attributes.position.needsUpdate = true;
    }

    // Slowly rotate the entire network
    points.rotation.y += 0.0008;
    points.rotation.x += 0.0004;
    lines.rotation.y += 0.0008;
    lines.rotation.x += 0.0004;

    // Parallax mouse effect
    const mouseX = state.pointer.x * 0.4;
    const mouseY = state.pointer.y * 0.4;
    points.position.x = THREE.MathUtils.lerp(points.position.x, mouseX, 0.05);
    points.position.y = THREE.MathUtils.lerp(points.position.y, mouseY, 0.05);
    lines.position.x = THREE.MathUtils.lerp(lines.position.x, mouseX, 0.05);
    lines.position.y = THREE.MathUtils.lerp(lines.position.y, mouseY, 0.05);
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00E5FF"
          size={0.12}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.8}
        />
      </points>
      <lineSegments ref={lineSegmentsRef}>
        <bufferGeometry />
        <lineBasicMaterial
          color="#7B61FF"
          transparent={true}
          opacity={0.2}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}

export function HeroNetworkCanvas() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-[#050816]" />;

  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#7B61FF" />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}

// --- SKILL GALAXY 3D SPHERE ---
interface SkillNode {
  name: string;
  pos: [number, number, number];
  color: string;
}

const SKILL_ITEMS: SkillNode[] = [
  // Core Analytics (Cyan)
  { name: "Python", pos: [2.0, 0.5, 0.2], color: "#00E5FF" },
  { name: "SQL", pos: [-1.8, 1.2, -0.5], color: "#00E5FF" },
  { name: "Power BI", pos: [1.2, -1.4, 1.5], color: "#00E5FF" },
  { name: "Excel", pos: [-1.2, -1.8, -1], color: "#00E5FF" },
  { name: "Tableau", pos: [0.5, 2.0, -1.8], color: "#00E5FF" },
  
  // AI/ML (Purple)
  { name: "Machine Learning", pos: [-2.2, -0.6, 1.2], color: "#7B61FF" },
  { name: "LangChain", pos: [1.6, 1.5, 1], color: "#7B61FF" },
  { name: "NLP", pos: [-0.5, 2.2, 0.8], color: "#7B61FF" },
  { name: "Gen AI", pos: [0.8, -0.8, -2.0], color: "#7B61FF" },
  { name: "PyTorch", pos: [-1.0, 0.5, -2.2], color: "#7B61FF" },
  
  // Consulting / Business (Accent Emerald)
  { name: "Strategy", pos: [1.5, -1.8, -1.2], color: "#00FFB3" },
  { name: "Requirements", pos: [-1.8, -1.2, -1.5], color: "#00FFB3" },
  { name: "Stakeholders", pos: [-0.2, -2.2, 1.2], color: "#00FFB3" },
  { name: "Consulting", pos: [2.2, -0.5, -1.5], color: "#00FFB3" },
  { name: "Solution Design", pos: [-0.8, 1.6, 1.8], color: "#00FFB3" },
];

function SkillSphere() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Rotate galaxy based on mouse position
    const targetY = state.pointer.x * 0.6;
    const targetX = -state.pointer.y * 0.6;
    
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
    
    // Self-spin
    groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef}>
      {/* Outer Orbit Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.8, 2.82, 64]} />
        <meshBasicMaterial color="#7B61FF" transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <ringGeometry args={[3.2, 3.22, 64]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>

      {/* Orbiting particles */}
      <points>
        <sphereGeometry args={[3.0, 24, 24]} />
        <pointsMaterial color="#00FFB3" size={0.03} transparent opacity={0.25} sizeAttenuation />
      </points>

      {SKILL_ITEMS.map((skill, idx) => (
        <group key={idx} position={skill.pos}>
          {/* Glowing node sphere */}
          <mesh>
            <sphereGeometry args={[0.16, 16, 16]} />
            <meshStandardMaterial
              color={skill.color}
              emissive={skill.color}
              emissiveIntensity={1.0}
              roughness={0.1}
            />
          </mesh>
          
          {/* Subtle outer halo */}
          <mesh>
            <sphereGeometry args={[0.28, 16, 16]} />
            <meshBasicMaterial color={skill.color} transparent opacity={0.15} wireframe />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function SkillGalaxyCanvas() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[350px] w-full bg-[#050816]" />;

  return (
    <div className="h-[350px] md:h-[450px] w-full">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 55 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#7B61FF" />
        <SkillSphere />
      </Canvas>
    </div>
  );
}

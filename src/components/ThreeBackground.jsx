import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars, Torus } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.05;
      meshRef.current.rotation.y = t * 0.08;
      meshRef.current.position.y = Math.sin(t * 0.3) * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1.2, 100, 200]} scale={2.2}>
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.35}
          speed={1.5}
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.1}
        />
      </Sphere>
    </Float>
  );
}

function FloatingRings() {
  const groupRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.z = t * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {[2.8, 3.5, 4.2].map((radius, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.2} floatIntensity={0.2}>
          <Torus args={[radius, 0.005, 16, 120]} rotation={[Math.PI / 2, 0.05 * i, 0]}>
            <meshBasicMaterial color="#8b5cf6" transparent opacity={0.08} />
          </Torus>
        </Float>
      ))}
    </group>
  );
}

function GridBackground() {
  return (
    <mesh rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry args={[100, 100, 60, 60]} />
      <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.04} />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050508]">
      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.06)_0%,transparent_70%)] pointer-events-none" />
      
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.25} penumbra={1} intensity={2} color="#6366f1" />
        <spotLight position={[-10, 15, 10]} angle={0.25} penumbra={1} intensity={1} color="#a855f7" />
        
        <AnimatedSphere />
        <FloatingRings />
        <GridBackground />
      </Canvas>
    </div>
  );
}

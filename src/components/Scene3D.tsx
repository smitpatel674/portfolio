import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function DistortedSphere({ position, color, speed, distort, scale }: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  scale: number;
}) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.1;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.85}
        />
      </mesh>
    </Float>
  );
}

function TorusKnot({ position }: { position: [number, number, number] }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.z = state.clock.elapsedTime * 0.1;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={0.55}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial color="#a78bfa" roughness={0.2} metalness={0.9} />
      </mesh>
    </Float>
  );
}

const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#a78bfa" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#4f46e5" />
        <pointLight position={[3, -2, 2]} intensity={0.6} color="#7c3aed" />

        <DistortedSphere position={[0, 0, 0]} color="#4f46e5" speed={1.4} distort={0.5} scale={1.6} />
        <DistortedSphere position={[2.6, 1.2, -1]} color="#7c3aed" speed={1.8} distort={0.4} scale={0.7} />
        <DistortedSphere position={[-2.5, -1, -0.5]} color="#a78bfa" speed={1.6} distort={0.6} scale={0.55} />
        <TorusKnot position={[2.2, -1.4, 0.5]} />

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;

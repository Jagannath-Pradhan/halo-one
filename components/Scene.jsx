"use client";
import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "@/lib/store";

function Headphone() {
  const group = useRef(null);
  const { viewport } = useThree();
  const scale = Math.min(1.1, viewport.width / 4.2); // responsive model size

  const body = useMemo(() => new THREE.MeshPhysicalMaterial({ color: "#ff5c8a" }), []);
  const cushion = useMemo(() => new THREE.MeshStandardMaterial({ color: "#1b1433", roughness: 0.9 }), []);
  const glow = useMemo(() => new THREE.MeshStandardMaterial({ color: "#6ee7f9", emissive: "#6ee7f9", emissiveIntensity: 2.2 }), []);
  const target = useMemo(() => new THREE.Color(), []);

  useFrame((_, dt) => {
    const { color, finish } = useStore.getState();
    body.color.lerp(target.set(color), 1 - Math.pow(0.001, dt));
    const f = { matte: [0.15, 0.7, 0], glossy: [0.2, 0.12, 1], metal: [1, 0.22, 0.4] }[finish];
    body.metalness = THREE.MathUtils.lerp(body.metalness, f[0], 0.1);
    body.roughness = THREE.MathUtils.lerp(body.roughness, f[1], 0.1);
    body.clearcoat = THREE.MathUtils.lerp(body.clearcoat, f[2], 0.1);
    group.current.rotation.y += dt * 0.35;
  });

  return (
    <group ref={group} scale={scale} position={[0, 0.2, 0]}>
      <mesh material={body}><torusGeometry args={[1.3, 0.09, 24, 80, Math.PI]} /></mesh>
      {[-1, 1].map((s) => (
        <group key={s} position={[s * 1.3, -0.1, 0]}>
          <mesh material={body} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.62, 0.62, 0.38, 64]} /></mesh>
          <mesh material={cushion} position={[-s * 0.26, 0, 0]} rotation={[0, Math.PI / 2, 0]}><torusGeometry args={[0.44, 0.17, 24, 64]} /></mesh>
          <mesh material={glow} position={[s * 0.2, 0, 0]} rotation={[0, Math.PI / 2, 0]}><torusGeometry args={[0.38, 0.018, 16, 80]} /></mesh>
        </group>
      ))}
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0.4, 5.2], fov: 38 }} gl={{ antialias: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 2]} intensity={1.6} />
        <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.7}><Headphone /></Float>
        <ContactShadows position={[0, -1.4, 0]} opacity={0.5} scale={8} blur={2.6} far={3} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.8} />
    </Canvas>
  );
}

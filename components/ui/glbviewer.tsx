import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

import { useMemo } from "react";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);

  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group ref={groupRef} scale={1}>
      <primitive object={clonedScene} />
    </group>
  );
}


export default function GlbViewer({ modelPath }: { modelPath: string }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-full"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1.5} />
        <Suspense fallback={null}>
          <Model url={modelPath}  />
        </Suspense>
      </Canvas>
    </div>
  );
}

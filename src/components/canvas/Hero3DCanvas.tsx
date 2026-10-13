import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NeuralGraph() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate 45 nodes in a 3D sphere volume
  const { nodePositions, linePositions } = useMemo(() => {
    const count = 45;
    const positions = new Float32Array(count * 3);
    const radius = 2.4;

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius;
      const sinPhi = Math.sin(phi);

      positions[i * 3] = r * sinPhi * Math.cos(theta);
      positions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    // Connect nodes within a distance threshold
    const lineCoords: number[] = [];
    const threshold = 1.35;

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < threshold) {
          lineCoords.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }

    return {
      nodePositions: positions,
      linePositions: new Float32Array(lineCoords),
    };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const targetRotX = state.pointer.y * 0.35 + Math.sin(t * 0.2) * 0.15;
    const targetRotY = state.pointer.x * 0.45 + t * 0.1;

    if (pointsRef.current) {
      pointsRef.current.rotation.x = THREE.MathUtils.damp(pointsRef.current.rotation.x, targetRotX, 2, delta);
      pointsRef.current.rotation.y = THREE.MathUtils.damp(pointsRef.current.rotation.y, targetRotY, 2, delta);
    }
    if (linesRef.current) {
      linesRef.current.rotation.x = THREE.MathUtils.damp(linesRef.current.rotation.x, targetRotX, 2, delta);
      linesRef.current.rotation.y = THREE.MathUtils.damp(linesRef.current.rotation.y, targetRotY, 2, delta);
    }
  });

  return (
    <group>
      {/* Neural Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodePositions.length / 3}
            array={nodePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.09}
          color="#C6F135"
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>

      {/* Synaptic Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#C6F135"
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-full pointer-events-none opacity-40 dark:opacity-50">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={0.6} />
        <NeuralGraph />
      </Canvas>
    </div>
  );
}

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../layout/Loader";
import { useIsTouchDevice } from "../../hooks/useIsTouchDevice";

const Earth = ({ autoRotate }: { autoRotate: boolean }) => {
  const earth = useGLTF("./planet/scene.gltf");
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  // Dynamically size the Earth to occupy 85% of the viewport's smallest dimension.
  // This guarantees it fits perfectly without clipping on mobile, tablet, or desktop.
  const scale = Math.min(viewport.width, viewport.height) * 0.42;

  // Auto-rotate the Earth when OrbitControls is not available (touch devices)
  useFrame((_state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={earth.scene} scale={scale} position-y={0} rotation-y={0} />
    </group>
  );
};

const EarthCanvas = () => {
  const isTouchDevice = useIsTouchDevice();

  return (
    <Canvas
      shadows
      frameloop={isTouchDevice ? "always" : "demand"}
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* On mouse devices: OrbitControls handles auto-rotation and interaction.
            On touch devices: OrbitControls is removed to prevent scroll hijacking,
            and the Earth component handles its own rotation via useFrame. */}
        {!isTouchDevice && (
          <OrbitControls
            autoRotate
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}
        <Earth autoRotate={isTouchDevice} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

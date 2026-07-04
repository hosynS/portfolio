import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Computers: React.FC<{ isMobile: boolean; isTablet: boolean }> = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Determine scale and position dynamically based on viewport breakpoints
  const scale = isMobile ? 0.6 : isTablet ? 0.62 : 0.75;
  const position: [number, number, number] = isMobile
    ? [0, -1.2, -2.2]
    : isTablet
      ? [0, -2.4, -1.8]
      : [0, -2.25, -1.5];

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Add media query listeners to detect screen profile changes
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(min-width: 501px) and (max-width: 1024px)");

    // Initialize screen states
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);

    // Callbacks to update screen states
    const handleMobileChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    const handleTabletChange = (event: MediaQueryListEvent) => {
      setIsTablet(event.matches);
    };

    // Attach listeners
    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    // Clean up listeners on unmount
    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  return (
    <div className={`absolute inset-x-0 top-[260px] sm:top-0 w-full h-[550px] sm:h-full max-h-[calc(100vh-270px)] sm:max-h-none ${isTablet ? 'pointer-events-none' : ''}`}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} isTablet={isTablet} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;

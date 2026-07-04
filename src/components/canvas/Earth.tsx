import { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  const { viewport } = useThree();

  // Dynamically size the Earth to occupy 85% of the viewport's smallest dimension.
  // This guarantees it fits perfectly without clipping on mobile, tablet, or desktop.
  const scale = Math.min(viewport.width, viewport.height) * 0.42;

  return (
    <primitive object={earth.scene} scale={scale} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [isTabletOS, setIsTabletOS] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const isMacLike = /Macintosh/i.test(navigator.userAgent);
    const hasTouch = navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
    const isIPadOS = isMacLike && hasTouch;
    const isMobileUserAgent = /iPad|iPhone|iPod|Android/i.test(navigator.userAgent);
    
    setIsTabletOS((isMobileUserAgent || isIPadOS) && !mobileQuery.matches);

    const handleMobileChange = (event: MediaQueryListEvent) => {
      setIsTabletOS((isMobileUserAgent || isIPadOS) && !event.matches);
    };

    mobileQuery.addEventListener("change", handleMobileChange);
    return () => mobileQuery.removeEventListener("change", handleMobileChange);
  }, []);

  return (
    <div className={`relative w-full h-full ${isTabletOS ? 'pointer-events-none' : ''}`}>
      <Canvas
        shadows
        frameloop="demand"
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
          <OrbitControls
            autoRotate
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;

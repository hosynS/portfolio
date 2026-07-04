import { useState } from "react";

/**
 * Detects whether the device supports touch input (iPad, phones, tablets).
 * Uses a synchronous check so the value is correct on the very first render,
 * preventing OrbitControls from ever mounting on touch devices.
 */
export const useIsTouchDevice = (): boolean => {
  const [isTouchDevice] = useState(() => {
    if (typeof window === "undefined") return false;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  });
  return isTouchDevice;
};

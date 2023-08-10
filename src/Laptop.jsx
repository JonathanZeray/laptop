import React from "react";
import {
  Html,
  Environment,
  useGLTF,
  PresentationControls,
} from "@react-three/drei";
import "./App.css";

export default function Laptop() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="warehouse" />
      <PresentationControls global azimuth={[-0.6, 0.4]} polar={[-0.4, 0.2]}>
        <primitive object={computer.scene} position-y={-1.3} position-x={0.3}>
          <Html
            className="laptop"
            position={[0, 1.5, -1.5]}
            transform
            distanceFactor={1.16}
            rotation-x={-0.25}
          >
            <iframe src="https://www.zeray.dev" frameborder="0" />
          </Html>
        </primitive>
      </PresentationControls>
    </>
  );
}

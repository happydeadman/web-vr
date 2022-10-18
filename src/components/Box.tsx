import React, { useRef, useState } from "react";
import {
  Canvas,
  useFrame,
  MeshStandardMaterialProps,
  ThreeElements,
} from "@react-three/fiber";
import { Mesh } from "three";

export const Box = (props: ThreeElements["mesh"]) => {
  const mesh = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "blue" : "orange"} />
    </mesh>
  );
};

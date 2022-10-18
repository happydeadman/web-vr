import {
  VRButton,
  ARButton,
  XR,
  Controllers,
  Hands,
  RayGrab,
  XRButton,
} from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { Box } from "./components/Box";
import { ContactShadows, OrbitControls, Sky } from "@react-three/drei";
import { Model } from "./components/Model";

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial color="#666" />
    </mesh>
  );
}
function App() {
  return (
    <>
      <VRButton />
      {/* <XRButton mode={'VR'}/> */}

      {/* <ARButton /> */}

      <Canvas>
        <XR>
          <Sky sunPosition={[0, 1, 0]} />
          <Floor />
          <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
          <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
          <Controllers />
          <OrbitControls />
          <group position={[0, 0, -4]}>
            <RayGrab>
              <Model
                position={[0, 0.25, 0]}
                url={
                  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf"
                }
              />
            </RayGrab>
          </group>
        </XR>
      </Canvas>
    </>
  );
}

export default App;

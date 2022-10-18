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
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Model } from "./components/Model";

function App() {
  return (
    <>
      <VRButton />
      {/* <XRButton mode={'VR'}/> */}

      {/* <ARButton /> */}

      <Canvas>
        <XR>
          <Controllers />
          <Hands />
          <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
          <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
          <group position={[0, -10, 0]}>
            <RayGrab>
              <Model
                position={[0, 0.25, 0]}
                url={
                  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf"
                }
              />
            </RayGrab>

            <ContactShadows scale={20} blur={10} far={20} />
          </group>
          <OrbitControls />
        </XR>
      </Canvas>
    </>
  );
}

export default App;

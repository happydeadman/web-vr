import { useGLTF } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";

interface IModel {
  url: string;
  position: Vector3;
}

export const Model = ({ url, ...props }: IModel) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} {...props} />;
};

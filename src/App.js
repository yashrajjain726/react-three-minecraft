import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import {Canvas} from 'react-three-fiber';
import { RecoilRoot } from 'recoil';
import { Vector3 } from 'three';
import { Ground } from './Ground';
import { Camera } from './Camera';
import { Player } from './Player';
import { Cube } from './Cube';
import { useCube } from './useCubeStore';

// drei -> Helpers 
// use-cannon - For using Physics 
// zustand -> Use to manage state, and store the cubes
// nanoid -> to generate id for each distingush cube
// recoil -> set of utilities for state management with React.

const Cubes = () => {
  const cubes = useCube();
  return [<Cube position={[0, 0.5, -10]} />, ...cubes];
};

const App = () => (
  <Canvas shadowMap sRGB gl={{ alpha: false }}>
    <RecoilRoot>
      <Camera/>
      <Sky sunPosition={new Vector3(100, 10, 100)} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player />
        <Cubes />
      </Physics>
    </RecoilRoot>
  </Canvas>
);

export default App;

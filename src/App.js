import { Sky } from 'drei';
import {Canvas} from 'react-three-fiber';
import { Vector3 } from 'three';
import { Physics } from 'use-cannon';
import Camera from './Camera'
import Ground from './Ground'

// drei -> Helpers 
// use-cannon - For using Physics 
// zustand -> Use to manage state, and store the cubes
// nanoid -> to generate id for each distingush cube

function App() {
  return (
    <div className="App">
     <Canvas>
       <Camera fov={50}/>
       <Sky sunPosition={new Vector3(100,100,100)}></Sky>
       <ambientLight intensity={0.3}></ambientLight>
       <pointLight castShadow intensity={0.8} position={[100,100,100]}></pointLight>
       <Physics>
         <Ground/>
         {/* <Player/> */}
       </Physics>

       </Canvas>
    </div>
  );
}

export default App;

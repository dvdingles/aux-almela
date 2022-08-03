import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Suspense } from 'react'
import {Solo} from '../components/Solo'



const Home: NextPage = () => {
  return (
    <div style={{width: '555', height: '777px', border: 'solid 2px #eee', backgroundColor: '#f5f5f5'}}>
    <Canvas camera={{zoom: 3, position:[1, 4 , 0]}} >
      {/* <focus-camera> */}
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Stage 
          contactShadow={{ 
            blur: 3, 
            opacity: 1, 
            position: [0,0,0]}}>
          <Solo 
            position={[0,-5,0]}
            rotation={[0,1.5,0]}
          />
        </Stage>
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  </div>

  )
}



export default Home

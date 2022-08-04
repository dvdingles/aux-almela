import { ContactShadows, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Suspense } from 'react'
// import { David } from '../components/David'
import { Dav } from '../components/Dav'



const Home: NextPage = () => {
  return (
    <div style={{width: '555', height: '777px', border: 'solid 2px #eee', backgroundColor: '#f5f5f5'}}>
    <Canvas camera={{zoom: 3, position:[0, .2, .5]}} >
      {/* <focus-camera> */}
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        
          <Dav 
            position={[0,0,0]}
            rotation={[0,1.5,0]}
          />
       
      </Suspense>
      <OrbitControls autoRotate />
      <ContactShadows resolution={1024} scale={20} position={[0, -1.02, 0]} blur={1} opacity={0.5} far={3} color="#1A5AaF" />
    </Canvas>
  </div>

  )
}



export default Home

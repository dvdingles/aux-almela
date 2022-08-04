import { ContactShadows, Environment, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Suspense } from 'react'
// import { David } from '../components/David'
import { Dav } from '../components/Dav'



const Home: NextPage = () => {
  return (
    <div style={{width: '555', height: '777px', border: 'solid 2px #eee', backgroundColor: '#f5f5f5'}}>
    <Canvas camera={{view: 
        {
          enabled: true,
          fullWidth: 100,
          fullHeight: 100,
          offsetX: 0,
          offsetY: -30,
          width: 100,
          height: 100,
        }
        ,  focus: 10, fov: 75 ,zoom: 9, position:[0, .2, 1]}} >
      {/* <focus-camera> */}
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[-1, 0.5, 0]} />
      <Suspense fallback={null}>
      <Environment far={10} files="/snowy_park_01_4k.hdr" ground={{ height: 10, scale: 1 }} />
        
          <Dav 
            position={[0,0.06,0]}
            // rotation={[0,1.5,0]}
          />
       
      </Suspense>
      <OrbitControls autoRotate autoRotateSpeed={1} />
      <ContactShadows resolution={1024} scale={1} position={[0, -.01, 0]} blur={3} opacity={.3} far={1} color="#8a6246" />
    </Canvas>
  </div>

  )
}



export default Home

import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef } from 'react'
import { GizmoHelper, GizmoViewcube, OrbitControls } from '@react-three/drei';

function App() {

  function Animation() {
    const boxRef = useRef();

    useFrame(() => {
      boxRef.current.rotation.x += 0.005;
      boxRef.current.rotation.y += 0.005;
      boxRef.current.rotation.z += 0.005;
    });

    return (
      <mesh ref={boxRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={0x00bfff} />
      </mesh>
    )
  }

  return (
    <div id="container">
      <Canvas camera={{position: [2,2,1]}}>
        <Animation />
        {/* <ambientLight /> */}
        <spotLight intensity={50} position={[4, 2, 3]} />

        {/* <directionalLight
          position={[4, 2, 3]}
          color={0xffea00}
          intensity={0.8}
        /> */}
        {/* <directionalLight position={[2, 5, 1]} /> */}
        <OrbitControls />
        {/* <GizmoHelper alignment="bottom-right" margin={[80, 80]} >
        <GizmoViewcube />
        </GizmoHelper> */}


        {/* <mesh>
          <boxGeometry args={[2,3,2]} />
          <meshPhongMaterial color={"red"} />
          <directionalLight position={[2, 5, 1]} />
        </mesh> */}
      </Canvas>
    </div>
  )
}

export default App

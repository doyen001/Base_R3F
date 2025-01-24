import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef } from 'react'

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
        <directionalLight position={[2, 5, 1]} />

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

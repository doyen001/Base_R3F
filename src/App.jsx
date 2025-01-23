import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {

  return (
    <div id="container">
      <Canvas>
        <mesh>
          <sphereGeometry args={[3, 80, 80]} />
          <meshBasicMaterial wireframe />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App

import { useState } from 'react'
import { Canvas } from '@react-three/fiber';

import Laptop from './Laptop.jsx';
import './App.css'

function App() {

  return (
    <>
    <Canvas camera={{
      fov: 30,
      near: 0.1,
      far: 2000,
      position: [-3, 1.5, 4],
    }}>
      <Laptop />
    </Canvas>
    
    </>
  )
}

export default App

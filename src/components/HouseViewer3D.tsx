import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Grid } from '@react-three/drei';
import { Suspense } from 'react';
import HouseModel from './HouseModel';

interface HouseViewer3DProps {
  houseData?: any;
}

export default function HouseViewer3D({ houseData }: HouseViewer3DProps) {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-b from-sky-100 to-sky-200">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[15, 10, 15]} fov={50} />
        <OrbitControls 
          enablePan={true} 
          enableZoom={true} 
          enableRotate={true}
          minDistance={5}
          maxDistance={30}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        
        <Suspense fallback={null}>
          <HouseModel data={houseData} />
        </Suspense>
        
        <Grid
          args={[30, 30]}
          cellSize={1}
          cellThickness={0.5}
          cellColor="#c0c0c0"
          sectionSize={5}
          sectionThickness={1}
          sectionColor="#808080"
          fadeDistance={30}
          fadeStrength={1}
          followCamera={false}
          infiniteGrid={true}
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
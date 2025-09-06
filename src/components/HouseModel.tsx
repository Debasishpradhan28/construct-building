import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cone } from '@react-three/drei';
import * as THREE from 'three';

interface HouseModelProps {
  data?: any;
}

export default function HouseModel({ data }: HouseModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  // Simple house model - can be replaced with actual 3D model based on data
  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main building */}
      <Box
        args={[8, 5, 10]}
        position={[0, 2.5, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#f5f5f5" />
      </Box>
      
      {/* Roof */}
      <Cone
        args={[7, 3, 4]}
        position={[0, 6.5, 0]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cone>
      
      {/* Windows */}
      <Box args={[1.5, 1.5, 0.1]} position={[-2, 2.5, 5.05]} castShadow>
        <meshStandardMaterial color="#87ceeb" transparent opacity={0.7} />
      </Box>
      <Box args={[1.5, 1.5, 0.1]} position={[2, 2.5, 5.05]} castShadow>
        <meshStandardMaterial color="#87ceeb" transparent opacity={0.7} />
      </Box>
      
      {/* Door */}
      <Box args={[1.5, 2.5, 0.1]} position={[0, 1.25, 5.05]} castShadow>
        <meshStandardMaterial color="#654321" />
      </Box>
      
      {/* Garage */}
      <Box
        args={[4, 3, 4]}
        position={[6, 1.5, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#e0e0e0" />
      </Box>
      
      {/* Garage Roof */}
      <Box
        args={[4.5, 0.3, 4.5]}
        position={[6, 3.15, 0]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Box>
      
      {/* Ground */}
      <Box
        args={[30, 0.1, 30]}
        position={[0, -0.05, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#90ee90" />
      </Box>
    </group>
  );
}
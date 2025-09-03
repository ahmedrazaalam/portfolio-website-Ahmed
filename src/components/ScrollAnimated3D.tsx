import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple 3D Floating Object Component
const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate based on scroll and time
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Scroll-based rotation
      const scrollRotation = scrollY * 0.002;
      meshRef.current.rotation.x = time * 0.2 + scrollRotation;
      meshRef.current.rotation.y = time * 0.3 + scrollRotation * 0.5;
      
      // Scroll-based scale
      const scrollScale = 1 + (scrollY * 0.0005);
      meshRef.current.scale.setScalar(Math.min(scrollScale, 1.5));
      
      // Floating motion
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.2 - (scrollY * 0.001);
    }
  });

  // Dynamic color based on scroll
  const hue = 0.6 + scrollY * 0.0001;
  const color = new THREE.Color().setHSL(hue, 0.8, 0.6);

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshPhongMaterial
        color={color}
        transparent
        opacity={0.6}
        shininess={100}
      />
    </mesh>
  );
};

// Secondary floating object
const SecondaryGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      meshRef.current.rotation.x = -time * 0.15 - scrollY * 0.001;
      meshRef.current.rotation.z = time * 0.25 + scrollY * 0.0015;
      
      const scrollScale = 0.6 + (scrollY * 0.0003);
      meshRef.current.scale.setScalar(Math.min(scrollScale, 1.2));
      
      meshRef.current.position.y = Math.cos(time * 0.7) * 0.3 + (scrollY * 0.0008);
    }
  });

  // Dynamic color based on scroll
  const hue = 0.15 + scrollY * 0.0001;
  const color = new THREE.Color().setHSL(hue, 0.9, 0.7);

  return (
    <mesh ref={meshRef} position={[-2.5, 1, -1]}>
      <icosahedronGeometry args={[0.7, 1]} />
      <meshPhongMaterial
        color={color}
        transparent
        opacity={0.5}
        shininess={80}
      />
    </mesh>
  );
};

// Main 3D Scene Component
const ScrollAnimated3D: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#10b981" />
        
        <FloatingGeometry />
        <SecondaryGeometry />
      </Canvas>
    </div>
  );
};

export default ScrollAnimated3D;

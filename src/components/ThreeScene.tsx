
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene = ({ className = '' }: ThreeSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
    renderer: THREE.WebGLRenderer | null;
    particles: THREE.Points | null;
    animationFrameId: number | null;
  }>({
    scene: null,
    camera: null,
    renderer: null,
    particles: null,
    animationFrameId: null,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create neural network particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 5;
      posArray[i + 1] = (Math.random() - 0.5) * 5;
      posArray[i + 2] = (Math.random() - 0.5) * 5;
      
      // Color - bluish gradient
      colorsArray[i] = 0.1 + Math.random() * 0.2;      // R
      colorsArray[i + 1] = 0.3 + Math.random() * 0.3;  // G
      colorsArray[i + 2] = 0.5 + Math.random() * 0.5;  // B
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    
    // Create points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Add connections between particles (neural network effect)
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x3498db,
      transparent: true,
      opacity: 0.2,
    });
    
    const lineConnections = [];
    const connectionDistance = 1.25; // Maximum distance for connection
    
    for (let i = 0; i < particlesCount; i++) {
      for (let j = i + 1; j < particlesCount; j++) {
        const x1 = posArray[i * 3];
        const y1 = posArray[i * 3 + 1];
        const z1 = posArray[i * 3 + 2];
        
        const x2 = posArray[j * 3];
        const y2 = posArray[j * 3 + 1];
        const z2 = posArray[j * 3 + 2];
        
        const distance = Math.sqrt(
          Math.pow(x2 - x1, 2) + 
          Math.pow(y2 - y1, 2) + 
          Math.pow(z2 - z1, 2)
        );
        
        if (distance < connectionDistance && Math.random() > 0.97) {
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(x1, y1, z1),
            new THREE.Vector3(x2, y2, z2),
          ]);
          
          const line = new THREE.Line(lineGeometry, lineMaterial);
          scene.add(line);
          lineConnections.push(line);
        }
      }
    }

    // Camera position
    camera.position.z = 5;

    // Animation
    const animate = () => {
      if (particles) {
        particles.rotation.x += 0.0003;
        particles.rotation.y += 0.0005;
      }

      renderer.render(scene, camera);
      sceneRef.current.animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };
    
    window.addEventListener('resize', handleResize);

    // Mouse movement effect
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      if (particles) {
        particles.rotation.x += mouseY * 0.001;
        particles.rotation.y += mouseX * 0.001;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    // Save refs
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      animationFrameId: null,
    };

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      
      if (sceneRef.current.animationFrameId !== null) {
        cancelAnimationFrame(sceneRef.current.animationFrameId);
      }
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      scene.remove(particles);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      
      lineConnections.forEach(line => {
        scene.remove(line);
        line.geometry.dispose();
      });
      
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
};

export default ThreeScene;

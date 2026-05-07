import * as THREE from 'three';
import { useEffect, useRef } from 'react';

export default function HolographicScene() {
  const mount = useRef(null);

  useEffect(() => {
    const current = mount.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, current.clientWidth / current.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(current.clientWidth, current.clientHeight);
    current.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const sphereGeometry = new THREE.IcosahedronGeometry(1.55, 3);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x7d5cff,
      metalness: 0.8,
      roughness: 0.18,
      transparent: true,
      opacity: 0.44,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    group.add(sphere);

    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00d9ff,
      emissive: 0x141c5a,
      transmission: 0.52,
      opacity: 0.25,
      transparent: true,
      roughness: 0.1,
      metalness: 0.35,
    });
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.9, 48, 48), innerMaterial);
    group.add(core);

    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xff2bd6, transparent: true, opacity: 0.55 });
    [0, 1, 2].forEach((index) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.25 + index * 0.42, 0.012, 12, 180), ringMaterial.clone());
      ring.rotation.x = Math.PI / 2.5 + index * 0.42;
      ring.rotation.y = index * 0.38;
      group.add(ring);
    });

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 950;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({ color: 0x8feeff, size: 0.018, transparent: true, opacity: 0.72 }),
    );
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0x7a80ff, 0.9));
    const blue = new THREE.PointLight(0x00d9ff, 4, 12);
    blue.position.set(-3, 2, 4);
    scene.add(blue);
    const pink = new THREE.PointLight(0xff2bd6, 3.5, 12);
    pink.position.set(3, -2, 4);
    scene.add(pink);

    const mouse = new THREE.Vector2(0, 0);
    const onMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onMove);

    const clock = new THREE.Clock();
    let frame;
    const animate = () => {
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.18 + mouse.x * 0.26;
      group.rotation.x = Math.sin(t * 0.45) * 0.12 + mouse.y * 0.14;
      sphere.rotation.z = t * 0.08;
      core.scale.setScalar(1 + Math.sin(t * 1.7) * 0.035);
      particles.rotation.y = t * 0.025;
      particles.rotation.x = mouse.y * 0.04;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      camera.aspect = current.clientWidth / current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(current.clientWidth, current.clientHeight);
    };
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      current.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      innerMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mount} className="absolute inset-0" aria-hidden="true" />;
}

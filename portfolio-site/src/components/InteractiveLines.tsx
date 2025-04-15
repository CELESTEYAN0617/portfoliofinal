import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";

const InteractiveLines: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let container: HTMLDivElement;
    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let raycaster: THREE.Raycaster;
    let renderer: THREE.WebGLRenderer;
    let parentTransform: THREE.Object3D;
    let stats: Stats;
    let cameraTheta = 0;
    let floatingPlane: THREE.Mesh;
    let planeVelocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.02,
      (Math.random() - 0.5) * 0.02,
      (Math.random() - 0.5) * 0.02
    );
    let planeRotationSpeed = new THREE.Vector3(
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01
    );

    const pointer = new THREE.Vector2();
    const cameraRadius = 100;

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
      stats.update();
    };

    const render = () => {
      // Update camera position
      cameraTheta += 0.06;
      camera.position.x = cameraRadius * Math.sin(THREE.MathUtils.degToRad(cameraTheta));
      camera.position.y = cameraRadius * Math.sin(THREE.MathUtils.degToRad(cameraTheta));
      camera.position.z = cameraRadius * Math.cos(THREE.MathUtils.degToRad(cameraTheta));
      camera.lookAt(scene.position);
      camera.updateMatrixWorld();

      // Update floating plane position and rotation
      floatingPlane.position.add(planeVelocity);
      floatingPlane.rotation.x += planeRotationSpeed.x;
      floatingPlane.rotation.y += planeRotationSpeed.y;
      floatingPlane.rotation.z += planeRotationSpeed.z;

      // Bounce off walls with slight rotation change
      if (Math.abs(floatingPlane.position.x) > 50) {
        planeVelocity.x *= -1;
        floatingPlane.position.x = Math.sign(floatingPlane.position.x) * 50;
        planeRotationSpeed.x *= -1;
      }
      if (Math.abs(floatingPlane.position.y) > 50) {
        planeVelocity.y *= -1;
        floatingPlane.position.y = Math.sign(floatingPlane.position.y) * 50;
        planeRotationSpeed.y *= -1;
      }
      if (Math.abs(floatingPlane.position.z) > 50) {
        planeVelocity.z *= -1;
        floatingPlane.position.z = Math.sign(floatingPlane.position.z) * 50;
        planeRotationSpeed.z *= -1;
      }

      // Randomly change direction and rotation occasionally
      if (Math.random() < 0.01) {
        planeVelocity.set(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        );
        planeRotationSpeed.set(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        );
      }

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(parentTransform.children, true);

      renderer.render(scene, camera);
    };

    // ------- INIT -----------
    if (containerRef.current) {
      container = containerRef.current;

      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xF4F1EC);

      // Create floating plane
      const planeGeometry = new THREE.PlaneGeometry(80, 80);
      const planeMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xB2FFFF,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide
      });
      floatingPlane = new THREE.Mesh(planeGeometry, planeMaterial);
      floatingPlane.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
      floatingPlane.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(floatingPlane);

      // Add lights for better 3D effect
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      const lineGeometry = new THREE.BufferGeometry();
      const points: number[] = [];
      const point = new THREE.Vector3();
      const direction = new THREE.Vector3();

      for (let i = 0; i < 50; i++) {
        direction.x += Math.random() - 0.5;
        direction.y += Math.random() - 0.5;
        direction.z += Math.random() - 0.5;
        direction.normalize().multiplyScalar(10);
        point.add(direction);
        points.push(point.x, point.y, point.z);
      }

      lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));

      parentTransform = new THREE.Object3D();

      for (let i = 0; i < 50; i++) {
        const lineMaterial = new THREE.LineBasicMaterial({ color: Math.random() * 0xffffff });
        const object =
          Math.random() > 0.5
            ? new THREE.Line(lineGeometry, lineMaterial)
            : new THREE.LineSegments(lineGeometry, lineMaterial);

        object.position.set(Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200);
        object.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);
        object.scale.set(Math.random() + 0.5, Math.random() + 0.5, Math.random() + 0.5);
        parentTransform.add(object);
      }

      scene.add(parentTransform);

      raycaster = new THREE.Raycaster();
      raycaster.params.Line.threshold = 3;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      stats = new Stats();
      container.appendChild(stats.dom);

      window.addEventListener("resize", onWindowResize);
      document.addEventListener("pointermove", onPointerMove);
      animate();
    }

    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
};

export default InteractiveLines;

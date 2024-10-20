import * as THREE from "three";
import { OBJLoader } from "jsm/loaders/OBJLoader.js";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

function init(geometry) {
  const material = new THREE.MeshMatcapMaterial({
    matcap: new THREE.TextureLoader().load("./assets/textures/img3.jpg"),
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const sunlight = new THREE.DirectionalLight(0xffffff);
  sunlight.position.y = 2;
  scene.add(sunlight);

  const fillLight = new THREE.DirectionalLight(0x88ccff);
  fillLight.position.x = 1;
  fillLight.position.y = -2;
  scene.add(fillLight);

  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  }

  animate();
}

const loader = new OBJLoader();
loader.load("./assets/models/A_10.obj", (obj) =>
  init(obj.children[0].geometry)
);

function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", handleWindowResize, false);

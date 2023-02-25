/**
 * app.js
 *
 * This is the first file loaded. It sets up the Renderer,
 * Scene and Camera. It also starts the render loop and
 * handles window resizes.
 *
 */

// import document from "../document/index.document";
// import { GUI } from 'lil-gui';

import '../css/base.css';
import '../css/home.css';

import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { WebGLRenderer, PerspectiveCamera, Vector3, PMREMGenerator } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Scene } from 'scenes';
import ROYAL from '../components/scenes/textures/royal_esplanade_1k.hdr';

// import { RoomEnvironment } from 'objects';

let mobile = isMobileDevice();

const material = new THREE.MeshPhysicalMaterial({
    // map: null,
    color: 0x8f9eff,
    // color: 0x222222,
    // color: 0xffffff,
    sheen: 1,
    sheenRoughness: 1,
    sheenColor: 0x00ffbb,
    // sheenColor: 0xff7aa9,
    metalness: 1,
    roughness: 0,
    opacity: 1,
    // side: THREE.FrontSide,
    // transparent: true,
    envMapIntensity: 1
        // premultipliedAlpha: true,
        // envMap: ROYAL
        // TODO: Add custom blend mode that modulates background color by this materials color.
});


new RGBELoader()
    // .setPath('textures/')
    .load(ROYAL, function(texture) {

        texture.mapping = THREE.EquirectangularReflectionMapping;

        material.envMap = texture;
        material.needsUpdate = true;

    });

// Initialize core ThreeJS components
const scene = new Scene(mobile, material);
const camera = new PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
const renderer = new WebGLRenderer({ antialias: true });

// const pmremGenerator = new PMREMGenerator(renderer);
// scene.environment = pmremGenerator.fromScene(new RoomEnvironment(scene), 0.04).texture;


// Set up camera
// camera.position.set(0, 0, 20);
camera.position.set(0, 0, 100);
camera.lookAt(new Vector3(0, 0, 0));


// Set up renderer, canvas, and minor CSS adjustments
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
// transform the final color value of each fragment to the sRGB color space
renderer.outputEncoding = THREE.sRGBEncoding;

const canvas = renderer.domElement;
canvas.style.display = 'block'; // Removes padding below canvas
document.body.style.margin = 0; // Removes margin around page
document.body.style.overflow = 'hidden'; // Fix scrolling
document.body.appendChild(canvas);

// Set up controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
// controls.minDistance = 4;
// controls.maxDistance = 16;
controls.update();

// Render loop
const onAnimationFrameHandler = (timeStamp) => {
    controls.update();
    renderer.render(scene, camera);
    scene.update && scene.update(timeStamp);
    positionLight();
    window.requestAnimationFrame(onAnimationFrameHandler);
};
window.requestAnimationFrame(onAnimationFrameHandler);

// Resize Handler
const windowResizeHandler = () => {
    const { innerHeight, innerWidth } = window;
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
};
windowResizeHandler();
window.addEventListener('resize', windowResizeHandler, false);

// const barrelColorInput = document.getElementById('barrel');
// barrelColorInput.addEventListener('input', function() {
//     scene.change_material_color(this.id, this.value);
// });

// const accentColorInput = document.getElementById('accent');
// accentColorInput.addEventListener('input', function() {

//     scene.change_material_color(this.id, this.value);

// });

// const handleColorInput = document.getElementById('handle');
// handleColorInput.addEventListener('input', function() {

//     scene.change_material_color(this.id, this.value);

// });

// const filterColorInput = document.getElementById('filter');
// filterColorInput.addEventListener('input', function() {
//     scene.change_material_color(this.id, this.value);

// });

var spline = new THREE.CatmullRomCurve3([

    new THREE.Vector3(-100, -100, 0),
    new THREE.Vector3(100, 100, 0),

    // new THREE.Vector3(-50, -50, 0),
    // new THREE.Vector3(50, 50, 0),
    // new THREE.Vector3(0, 0, -50),
    // new THREE.Vector3(-50, -50, 0),

    // new THREE.Vector3(-20, -20, 0),

    // new THREE.Vector3(-10, 0, 0),
    // new THREE.Vector3(0, 10, 0),
    // new THREE.Vector3(10, 0, 0),
    // new THREE.Vector3(0, -10, 0),
    // new THREE.Vector3(-10, 0, 0),


    // new THREE.Vector3(0, 20, -100),
    // new THREE.Vector3(20, 20, -100),
    // new THREE.Vector3(40, 20, 100),
    // new THREE.Vector3(70, 20, 10),
    // new THREE.Vector3(100, 20, 30),
    // new THREE.Vector3(-100, 20, 100)
]);

// var geometry = new THREE.BufferGeometry().setFromPoints(spline.getPoints(50));
// var lineMaterial = new THREE.LineBasicMaterial({
//     color: 0xffffff,
// });
// // geometry.vertices = splinePoints;
// var line = new THREE.Line(geometry, lineMaterial);
// scene.add(line);

var pointLight = new THREE.PointLight();
// pointLight.position.set(10, 0, 0)
// pointLight.color = new THREE.Color(0xff00b3);
pointLight.color = new THREE.Color(0xff0000);
pointLight.intensity = 100;
pointLight.distance = 100;
pointLight.name = 'pointLight';
scene.add(pointLight);
var pos = 0;

function positionLight() {
    const light = scene.getObjectByName('pointLight');
    if (pos <= 1) {
        light.position.set(spline.getPointAt(pos).x, spline.getPointAt(pos).y, spline.getPointAt(pos).z);
        pos += 0.005
    } else {
        pos = 0;
    }
}

// console.log(window.innerHeight)
// console.log(getScreenCoords(window.innerWidth, 500));

function getScreenCoords(screenX, screenY) {
    let x = ((screenX - renderer.domElement.offsetLeft + 0.5) / window.innerWidth) * 2 - 1;
    let y = -((screenY - renderer.domElement.offsetTop + 0.5) / window.innerHeight) * 2 + 1;
    return [x, y];
}


// function is_mobile() {
//     let hasTouchScreen = false;
//     if ("maxTouchPoints" in navigator) {
//         hasTouchScreen = navigator.maxTouchPoints > 0;
//     } else if ("msMaxTouchPoints" in navigator) {
//         hasTouchScreen = navigator['msMaxTouchPoints'] > 0;
//     } else {
//         let mQ = window.matchMedia && matchMedia("(pointer:coarse)");
//         if (mQ && mQ.media === "(pointer:coarse)") {
//             hasTouchScreen = !!mQ.matches;
//         } else if ('orientation' in window) {
//             hasTouchScreen = true; // deprecated, but good fallback
//         }
//     }

//     const md = new MobileDetect(window.navigator.userAgent);
//     const isMobileDetected = Object.isNotNull(md.mobile()) || Object.isNotNull(md.phone()) || Object.isNotNull(md.tablet());

//     return hasTouchScreen && md.isPhoneSized(600) || isMobileDetected;
// }

function isMobileDevice() {
    var check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
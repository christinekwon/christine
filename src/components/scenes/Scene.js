// import { GUI } from 'lil-gui';
import * as THREE from 'three';
import { Frame, Lock } from 'objects';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

import { Lights } from 'lights';
// import CHUNG from './textures/chung/00.png';
import NEGX from './textures/Skybox/negx.jpg';
import POSX from './textures/Skybox/posx.jpg';
import NEGY from './textures/Skybox/negy.jpg';
import POSY from './textures/Skybox/posy.jpg';
import NEGZ from './textures/Skybox/negz.jpg';
import POSZ from './textures/Skybox/posz.jpg';

import NORMAL from './textures/normal/normal.jpg';
import { NormalAnimationBlendMode } from 'three';
// import EQUIRECT from './textures/equirectangular/royal_esplanade_1k.hdr';

class Scene extends THREE.Scene {
    constructor(mobile, material) {
        // Call parent Scene() constructor
        super();

        // Init state
        this.state = {
            // gui: new Dat.GUI(), // Create GUI for scene
            rotationSpeed: 1,
            updateList: [],

        };

        var envMap = new THREE.CubeTextureLoader()
            .load([
                POSX, NEGX,
                POSY, NEGY,
                POSZ, NEGZ
            ]);


        envMap.encoding = THREE.sRGBEncoding;


        this.background = new THREE.Color(0x000000);

        const lights = new Lights();
        this.add(lights);

        const sphereMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0,
            metalness: 1,
            envMap: envMap,
            envMapIntensity: 1,
        });

        const frame = new Frame(this, mobile, material);
        this.add(frame);


        // const lock = new Lock(this, mobile, material);
        // this.add(lock);
        // new RGBELoader()
        //     // .setPath('textures/')
        //     .load('textures/royal_esplanade_1k.hdr', function(texture) {

        //         texture.mapping = THREE.EquirectangularReflectionMapping;

        //         material.envMap = gemBackMaterial.envMap = texture;
        //         gemFrontMaterial.needsUpdate = gemBackMaterial.needsUpdate = true;

        //     });




    }

    change_material_color(type, color) {

        this.dyson.change_material_color(type, color);
    }



    addToUpdateList(object) {
        this.state.updateList.push(object);
    }

    update(timeStamp) {
        const { rotationSpeed, updateList } = this.state;
        // this.rotation.y = (rotationSpeed * timeStamp) / 10000;

        // this.mesh.rotation.x += 0.005;
        // this.mesh.rotation.y += 0.005;
        // Call update for each object in the updateList
        for (const obj of updateList) {
            obj.update(timeStamp);
        }
    }
}

export default Scene;
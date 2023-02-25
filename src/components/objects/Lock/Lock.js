import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import MODEL from './lock.obj';

class Lock extends THREE.Group {
    constructor(parent, mobile, material) {
        // Call parent Group() constructor
        super();

        // Init state
        this.state = {
            // gui: parent.state.gui,
            bob: true,
            spin: this.spin.bind(this),
            twirl: 0,
            blow: false,
        };

        this.material = material;
        const scale = 10;
        new OBJLoader().load(MODEL, obj => {
            let heart = obj.children[0];
            let gori = obj.children[1];

            // mesh = obj.children[0];
            heart.scale.set(scale, scale, scale);
            gori.scale.set(scale, scale, scale);
            // obj.rotation.set(Math.PI / 2, Math.PI / 2, 0);
            heart.rotation.set(0, 0, 0);
            gori.rotation.set(0, 0, 0);

            heart.position.set(0, 0, 5);
            gori.position.set(0, 0, 5);

            heart.material = material;
            gori.material = material;


            // if (mobile) {
            //     obj.children[0].material = mobile_accent_material;
            //     obj.children[1].material = mobile_accent_material;
            // } else {
            //     obj.children[0].material = accent_material;
            //     obj.children[1].material = accent_material;
            // }


            // console.log(this);


            // const pivot = new THREE.Group();
            // gori.position.set(-1.5, 0, 0);
            // pivot.position.set(1.5, 0, 5);
            // pivot.rotation.set(0, 0, 0);
            // pivot.add(gori);
            // this.add(pivot)
            // this.pivot = pivot;


            // const speed = 1000;
            // const delay = 1000;
            // const lift = new TWEEN.Tween(gori.position)
            //     .to({ x: gori.position, y: gori.position.y + 1.7, z: gori.position.z }, speed)
            //     .easing(TWEEN.Easing.Quadratic.In)
            //     .delay(delay);

            // const twist = new TWEEN.Tween(pivot.rotation)
            //     .to({ x: pivot.rotation.x, y: Math.PI, z: pivot.rotation.z }, speed)
            //     .easing(TWEEN.Easing.Quadratic.In)
            //     .delay(delay);

            // lift.start();
            // twist.start();

            this.add(heart);
            this.add(gori);

        });




        // const open_left = new TWEEN.Tween(this.left_door.rotation)
        //     .to({ x: 0, y: -Math.PI / 2, z: 0 }, 3000)
        //     .easing(TWEEN.Easing.Quadratic.In)
        //     .delay(open_delay);


        // const open_right = new TWEEN.Tween(this.right_door.rotation)
        //     .to({ x: 0, y: Math.PI / 2, z: 0 }, 3000)
        //     .easing(TWEEN.Easing.Quadratic.In)
        //     .delay(open_delay);


        // open_left.start();
        // open_right.start();


        // Add self to parent's update list
        parent.addToUpdateList(this);

        // this.change_material_color.bind(this);

    }



    spin() {
        // Add a simple twirl
        this.state.twirl += 6 * Math.PI;

        // Use timing library for more precice "bounce" animation
        // TweenJS guide: http://learningthreejs.com/blog/2011/08/17/tweenjs-for-smooth-animation/
        // Possible easings: http://sole.github.io/tween.js/examples/03_graphs.html
        const jumpUp = new TWEEN.Tween(this.position)
            .to({ y: this.position.y + 1 }, 300)
            .easing(TWEEN.Easing.Quadratic.Out);
        const fallDown = new TWEEN.Tween(this.position)
            .to({ y: 0 }, 300)
            .easing(TWEEN.Easing.Quadratic.In);

        // Fall down after jumping up
        jumpUp.onComplete(() => fallDown.start());

        // Start animation
        jumpUp.start();
    }

    update(timeStamp) {
        if (this.state.bob) {
            // Bob back and forth
            // this.rotation.z = 0.05 * Math.sin(timeStamp / 300);
        }

        TWEEN.update();
    }
}

export default Lock;
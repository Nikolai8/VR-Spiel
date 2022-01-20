import * as THREE from './three.module.js';

export { THREE };
import { Scene, Renderer } from './basics.js';
import { MeshCreator } from './geo.js';
import { ImmersiveRenderer } from './vr.js'
import { ray_demo } from './ray_demo.js'


let { scene, camera } = Scene();

let cursor = new THREE.Group();
scene.add(cursor);

let cursorMesh = MeshCreator(2, cursor);
cursorMesh.castShadow = true;
cursorMesh.rotation.set(-Math.PI / 2, 0, 0);

function reset_cursor() {
    cursor.position.set(0, 0, 0);
    cursor.rotation.set(0, 0, 0);
    cursor.updateMatrix();
}

let options = {
    is_rotating: true,
    is_grabbed: false,
    cursor
}

let demo = ray_demo(scene, options);


reset_cursor();
//Renderer(scene, camera, t => demo.update(t, options));

ImmersiveRenderer(scene, camera, t => demo.update(t, options), options);
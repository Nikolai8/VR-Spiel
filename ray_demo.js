import { THREE } from './app.js'
import { MeshSet, Line } from './geo.js';
import { winBackground, lostBackground } from './vr.js';

export function ray_demo(scene, options) {
    let meshes = MeshSet(scene);
    let { line, setPos } = Line(scene);
    meshes.add(line);
    line.material.setValues({ color: 0xffff00 });


    /* plane = meshes.create(6);
    plane.material.setValues({ color: 0x333333 });
    plane.material.side = THREE.DoubleSide;
    plane.receiveShadow = true;
    plane.position.set(0, -0.5, 0);
    plane.rotation.x = -Math.PI / 3;*/

    /////////////////////////////////////////////////
    /// Laser & Raycaster
    let raycaster = new THREE.Raycaster();

    // for matrix de-composition
    let position = new THREE.Vector3();
    let quaternion = new THREE.Quaternion();
    let scale = new THREE.Vector3();

    let direction = new THREE.Vector3();
    let rayEnd = new THREE.Vector3();

    const vrPosition = new THREE.Vector3( 0, 1.6, 0 );

    let moving = false;
    let lost = false;
    let win = false;
    let objectCounter = 5;
    const MAX = 3;

    function RNDpos() {
        let rand;
        
        while ((rand == undefined)) {
            rand = (Math.random() * 2) + 0.6;
        }
        return rand;
    }
    function RNDneg() {
        let rand;
        
        while ((rand == undefined) || (rand > -1 && rand < 1)) {
            rand = Math.random() * MAX;

            let temp = Math.random();
            if (temp < 0.5) {
                rand *= (-1);
            } else {
                rand *= (+1);
            }
        }
        return rand; 
    }


    let array_of_objects = [];
    for (let i = 0; i < objectCounter; ++i) {
        let circle = meshes.create(7);
        circle.castShadow = true;
        circle.matrixAutoUpdate = true;   //for moving, set true for select
        circle.position.set(RNDneg(), RNDpos(), RNDneg());
        circle.updateMatrix();
        circle.name = i;

        /*const quaternion = new THREE.Quaternion();
        quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );

        const vector = new THREE.Vector3( 1, 0, 0 );
        vector.applyQuaternion( quaternion );*/

        let rot = Math.PI / 2;
        let pivotArray = [];

        for (let j = 0; j < 4; j++) {
            pivotArray[j] = new THREE.Object3D();
            pivotArray[j].position.set(0, 0, 0);
            circle.add(pivotArray[j]);

            let cone = meshes.create(1);
            cone.castShadow = true;
            cone.matrixAutoUpdate = true;
        
            pivotArray[j].add(cone);
            pivotArray[j].rotation.z = (rot) * j;

            cone.position.set(0.0, 0.1, 0);
        }
        for (let k = 1; k < 4; k+=2) {
            pivotArray[k] = new THREE.Object3D();
            pivotArray[k].position.set(0, 0, 0);
            circle.add(pivotArray[k]);

            let cone = meshes.create(1);
            cone.castShadow = true;
            cone.matrixAutoUpdate = true;
        
            pivotArray[k].add(cone);
            pivotArray[k].rotation.x = (rot) * k;

            cone.position.set(0.0, 0.1, 0);
        }

        array_of_objects.push(circle);
    }


    let raylength = 5;
    function update_laser(cursor) {
        cursor.matrix.decompose(position, quaternion, scale);
        setPos(0, position);
        direction.set(0, 0, -1);
        direction.applyQuaternion(quaternion);
        raycaster.set(position, direction);
        let intersects = raycaster.intersectObjects(array_of_objects);
        if (intersects.length > 0) {
            setPos(1, intersects[0].point);
            raylength = intersects[0].distance;
            return intersects[0].object;
        } else {
            raylength = 5;
            rayEnd.addVectors(position, direction.multiplyScalar(raylength));
            setPos(1, rayEnd);
        }
    }

    function grabbed_laser(cursor) {
        cursor.matrix.decompose(position, quaternion, scale);
        setPos(0, position);
        direction.set(0, 0, -1);
        direction.applyQuaternion(quaternion);
        rayEnd.addVectors(position, direction.multiplyScalar(raylength));
        setPos(1, rayEnd);
    }
    /////////////////////////////////////////////////
    /// Grabbing
    let inverse = new THREE.Matrix4(),
        currentMatrix,
        initialGrabbed, hitObject,
        validGrabMatrix = false;


    function grabbing(cursor, hitObject, is_grabbed) {
        if (hitObject && is_grabbed && !win && !lost && hitObject.name !== "") {

            let index = array_of_objects.indexOf(array_of_objects.find(element => element.name == hitObject.name));
            if (index != -1) array_of_objects.splice(index, 1);
            hitObject.removeFromParent();
            hitObject.clear();
            
            if (validGrabMatrix) {
                currentMatrix = initialGrabbed.clone(); // Ti-1 * Li
                currentMatrix.premultiply(cursor.matrix); // Ln = Tn * Ti-1 * Li
                hitObject.matrix.copy(currentMatrix); // Ln LKS des zu bewegenden Obj.
            } else {
                inverse.copy(cursor.matrix).invert(); // Ti-1
                initialGrabbed = hitObject.matrix.clone(); // Li
                initialGrabbed.premultiply(inverse); // Ti-1 * Li
                validGrabMatrix = true;
            }
        } else {
            validGrabMatrix = false;
        }
    }

    meshes.update = function (time, options) {
        if (hitObject && options.is_grabbed) {
            grabbed_laser(options.cursor);
            if (moving == false) moving = true;
        } else {
            hitObject = update_laser(options.cursor);
        }
        grabbing(options.cursor, hitObject, options.is_grabbed);


        for(let i = 0; i < array_of_objects.length; i++) {
            array_of_objects[i].rotateY(0.1);
            if (moving == true) {
                if (array_of_objects[i].position.z < 0) {
                    array_of_objects[i].position.z += 0.01;
                } else if (array_of_objects[i].position.z > 0.01){
                    array_of_objects[i].position.z -= 0.01;
                }

                if (array_of_objects[i].position.y < 1.59) {
                    array_of_objects[i].position.y += 0.01;
                } else if (array_of_objects[i].position.y > 1.6) {
                    array_of_objects[i].position.y -= 0.01;
                }

                if (array_of_objects[i].position.x < 0) {
                    array_of_objects[i].position.x += 0.01;
                } else if (array_of_objects[i].position.x > 0.01) {
                    array_of_objects[i].position.x -= 0.01;
                }

                if (array_of_objects[i].position.y < 1.75 && array_of_objects[i].position.y > 1.45 && array_of_objects[i].position.x < 0.25 && array_of_objects[i].position.x > -0.25 && array_of_objects[i].position.z < 0.25 && array_of_objects[i].position.z > -0.25) {
                    moving = false;
                    lost = true;
                    lostBackground();
                }
            }
        }

        if (array_of_objects.length == 0){
            win = true;
            winBackground();
        }
    }
    return meshes;
}
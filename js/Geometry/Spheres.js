import * as THREE from "../../../lib/three/build/three.module.js";
import {MyAmmoBase} from "../MyAmmoBase.js";

export class Spheres extends MyAmmoBase
{
	constructor(ammoPhysicsWorld)
	{
		super();
		this.ammoPhysicsWorld = ammoPhysicsWorld;
		this.meshFirstBall = undefined;
		this.meshSecondBall = undefined;

		this.rigidBodyFirstBall = undefined;
		this.rigidBodySecondBall = undefined;
		this.IMPULSE_FORCE = 4;
	}

	create(radius=0.75, position={x:-40.75, y:15, z:0}, color=0X0000FF, mass=1)
	{
		//***********First ball***************
		mass = 1 * 0.75;
		this.meshFirstBall = new THREE.Mesh(new THREE.SphereBufferGeometry(0.75, 32, 32), new THREE.MeshPhongMaterial({color: 'blue'}));
		this.meshFirstBall.position.set(-40.75, 15, 0);
		this.meshFirstBall.castShadow = false;
		this.meshFirstBall.receiveShadow = false;
		this.meshFirstBall.userData.name = 'firstBall';

		let sphereShape1 = new Ammo.btSphereShape( 0.75 );
		this.rigidBodyFirstBall = this.createAmmoRigidBody(sphereShape1, this.meshFirstBall, 0.7, 0.5, mass)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyFirstBall, this.meshFirstBall, true, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********Second ball***************
		mass = 1 * 0.75;
		this.meshSecondBall = new THREE.Mesh(new THREE.SphereBufferGeometry(1, 32, 32), new THREE.MeshPhongMaterial({color: 'purple'}));
		this.meshSecondBall.position.set(-18, 13.5, 0);
		this.meshSecondBall.castShadow = false;
		this.meshSecondBall.receiveShadow = false;
		this.meshSecondBall.userData.name = 'secondBall';

		let sphereShape2 = new Ammo.btSphereShape( 1 );
		this.rigidBodySecondBall = this.createAmmoRigidBody(sphereShape2, this.meshSecondBall, 0.7, 0.5, mass)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodySecondBall, this.meshSecondBall, true, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********Third ball***************
		mass = 1 * 0.75;
		this.meshThirdBall = new THREE.Mesh(new THREE.SphereBufferGeometry(1, 32, 32), new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshThirdBall.position.set(21, 15, -25);
		this.meshThirdBall.castShadow = false;
		this.meshThirdBall.receiveShadow = false;
		this.meshThirdBall.userData.name = 'thirdBall';

		let sphereShape3 = new Ammo.btSphereShape( 1 );
		this.rigidBodyThirdBall = this.createAmmoRigidBody(sphereShape3, this.meshThirdBall, 0.7, 0.5, mass)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyThirdBall, this.meshThirdBall, true, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);
	}
	keyCheck(deltaTime, currentlyPressedKeys) {}

	createParticles(size, transparent, opacity, sizeAttenuation, color)
	{
		let material = new THREE.PointsMaterial(
			{
				size : size,
				transparent : transparent,
				opacity : opacity,
				map : getTexture(16),       //Styler vha. canvas.
				sizeAttenuation : sizeAttenuation,
				color : color
			});

		// Liste med vertekser:
		let range = 2000;
		let vertices = [];
		for (let i = 0; i < 15000; i++)
		{
			const x = THREE.MathUtils.randFloatSpread( range );
			const y = THREE.MathUtils.randFloatSpread( range );
			const z = THREE.MathUtils.randFloatSpread( range );
			vertices.push( x, y, z );
		}
		// Geometri:
		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

		let points = new THREE.Points(geometry, material);
		this.scene.add(points);
	}

	addParticles()
	{
		this.createParticles(2, true, 1, true, 0xFFFFFF);
	}

}


let getTexture = function(size)
{
	let canvas = document.createElement('canvas');
	canvas.width = size;
	canvas.height = size;

	let ctx = canvas.getContext('2d');
	ctx.fill();
	ctx.fillStyle = 'rgba(3, 12, 255, 1.0)';
	ctx.fillRect(0, 0, size, size);
	let texture = new THREE.Texture(canvas);
	texture.needsUpdate = true;
	return texture;
}

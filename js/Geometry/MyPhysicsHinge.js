import * as THREE from "../../../lib/three/build/three.module.js";
import {MyAmmoBase} from "../MyAmmoBase.js";

export class MyPhysicsHinge extends MyAmmoBase
{
	constructor(ammoPhysicsWorld)
	{
		super();

		this.ammoPhysicsWorld = ammoPhysicsWorld;

		this.boardRotAngle = 0;
		this.boardRotAxis = {x: 1, y:0, z: 0};
		this.IMPULSE_FORCE_STICK = 150;

		this.rbAnchor = undefined;
		this.anchorMesh = undefined;

		this.rbStick = undefined;
		this.stickMesh = undefined;

	}

	create()
	{
		let posStick = {x: 24, y: 0, z: 0};
		let sizeStick = {x: 3.4, y: 2, z: 1};
		let massStick = 50;

		let posAnchor = {x: 24, y: 0, z: 0};
		let radiusAnchor = 0.5;
		let massAnchor = 0;

		//ThreeJS, kule:
		let threeQuat = new THREE.Quaternion();
		threeQuat.setFromAxisAngle( new THREE.Vector3( this.boardRotAxis.x, this.boardRotAxis.y, this.boardRotAxis.z ), this.boardRotAngle);
		this.anchorMesh = new THREE.Mesh(new THREE.SphereGeometry(radiusAnchor), new THREE.MeshPhongMaterial({color: 0xb846db, transparent: true, opacity: 0.5}));
		this.anchorMesh.position.set(posAnchor.x, posAnchor.y, posAnchor.z);
		this.anchorMesh.castShadow = true;
		this.anchorMesh.receiveShadow = true;
		//AmmoJS, kule:
		let anchorColShape = new Ammo.btSphereShape( radiusAnchor );
		this.rbAnchor =this.createAmmoRigidBody(anchorColShape, this.anchorMesh, 0.4, 0.6, massAnchor);
		// Legger objektet til MyPhysicsWorld.
		this.ammoPhysicsWorld.addPhysicsObject(this.rbAnchor, this.anchorMesh, true, this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE);

		//ThreeJS, kube/stick:
		this.stickMesh = new THREE.Mesh(new THREE.BoxGeometry(sizeStick.x, sizeStick.y, sizeStick.z), new THREE.MeshPhongMaterial({color: 0xf78a1d}));
		this.stickMesh.position.set(posStick.x, posStick.y, posStick.z);
		this.stickMesh.castShadow = true;
		this.stickMesh.receiveShadow = true;
		//AmmoJS, kube/stick:
		let stickColShape = new Ammo.btBoxShape( new Ammo.btVector3( sizeStick.x * 0.5, sizeStick.y * 0.5, sizeStick.z * 0.5 ) );
		this.rbStick =this.createAmmoRigidBody(stickColShape, this.stickMesh, 0.4, 0.6, massStick);
		// Legger objektet til MyPhysicsWorld.
		this.ammoPhysicsWorld.addPhysicsObject(this.rbStick, this.stickMesh, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX);

		//Ammo, hengsel
		let anchorPivot = new Ammo.btVector3( 0, 1, 0 );
		let stickPivot = new Ammo.btVector3( - sizeStick.x * 0.5, 0, 0 );
		const anchorAxis = new Ammo.btVector3(0,1,0);
		const stickAxis = new Ammo.btVector3(0,1,0);
		let hingeConstraint = new Ammo.btHingeConstraint(this.rbAnchor, this.rbStick, anchorPivot, stickPivot, anchorAxis, stickAxis, false);
		this.ammoPhysicsWorld.ammoPhysicsWorld.addConstraint( hingeConstraint, false );
	}


	keyCheck(deltaTime, currentlyPressedKeys)
	{
		if (!this.rbStick || !this.rbAnchor)
			return;
		if (!this.anchorMesh || !this.stickMesh)
			return;

		this.rbStick.activate(true);
		this.rbAnchor.activate(true);

		let threeQuat = new THREE.Quaternion();
		threeQuat.setFromAxisAngle( new THREE.Vector3( this.boardRotAxis.x, this.boardRotAxis.y, this.boardRotAxis.z ), this.boardRotAngle);

		let tmpTrans = new Ammo.btTransform();
		let ms1 = this.rbStick.getMotionState();
		ms1.getWorldTransform( tmpTrans );
		let q1 = tmpTrans.getRotation();

		let threeDirectionVectorStick = new THREE.Vector3(1,0,0);
		let threeQuaternionStick = new THREE.Quaternion(q1.x(), q1.y(), q1.z(), q1.w());
		threeDirectionVectorStick.applyQuaternion(threeQuaternionStick);

		let threeDir2 = new THREE.Vector3();
		this.stickMesh.getWorldDirection(threeDir2);
		let threeDir3 = new THREE.Vector3(-threeDir2.x, -threeDir2.y, -threeDir2.z);
		
		if (currentlyPressedKeys[86])
		{	//V
			let rdv1 = new Ammo.btVector3(threeDir2.x*this.IMPULSE_FORCE_STICK , threeDir2.y*this.IMPULSE_FORCE_STICK , threeDir2.z*this.IMPULSE_FORCE_STICK );
			this.rbStick.applyCentralImpulse( rdv1, this.IMPULSE_FORCE_STICK );
		}

	}
}
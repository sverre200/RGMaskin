import * as THREE from "../../../lib/three/build/three.module.js";
import {MyAmmoBase} from "../MyAmmoBase.js";

export class Boxes extends MyAmmoBase
{
	constructor(ammoPhysicsWorld)
	{
		super();
		this.ammoPhysicsWorld = ammoPhysicsWorld;
		//Part 1
		this.rigidBodyDomino1 = undefined;
		this.rigidBodyDomino2 = undefined;
		this.rigidBodyDomino3 = undefined;
		this.rigidBodyDomino4 = undefined;
		this.rigidBodyDomino5 = undefined;
		this.rigidBodyDomino6 = undefined;
		this.rigidBodyDomino7 = undefined;
		this.rigidBodyDomino8 = undefined;
		this.rigidBodyDomino9 = undefined;
		this.rigidBodyDomino10 = undefined;
		this.rigidBodyDomino11 = undefined;
		//Part 1
		this.meshDomino1 = undefined;
		this.meshDomino2 = undefined;
		this.meshDomino3 = undefined;
		this.meshDomino4 = undefined;
		this.meshDomino5 = undefined;
		this.meshDomino6 = undefined;
		this.meshDomino7 = undefined;
		this.meshDomino8 = undefined;
		this.meshDomino9 = undefined;
		this.meshDomino10 = undefined;
		this.meshDomino11 = undefined;

		
		//Part2
		this.rigidBodyTowerPart1 = undefined;
		this.rigidBodyTowerPart2 = undefined;
		this.rigidBodyTowerPart3 = undefined;
		this.rigidBodyTowerPart4 = undefined;
		this.rigidBodyTowerPart5 = undefined;
		this.rigidBodyTowerPart6 = undefined;
		//Part2
		this.meshTowerPart1 = undefined;
		this.meshTowerPart2 = undefined;
		this.meshTowerPart3 = undefined;
		this.meshTowerPart4 = undefined;
		this.meshTowerPart5 = undefined;
		this.meshTowerPart6 = undefined;


		//Part 3
		this.rigidBodyBridge1 = undefined;
		this.rigidBodyBridge2 = undefined;
		this.rigidBodyBridge3 = undefined;
		//Part 3
		this.meshBridge1 = undefined;
		this.meshBridge2 = undefined;
		this.meshBridge3 = undefined;


		//Part4
		this.rigidBodyBallStopper1 = undefined;
		this.rigidBodyBallStopper2 = undefined;
		this.rigidBodyBallStopper3 = undefined;
		this.rigidBodyBallStopper4 = undefined;
		this.rigidBodyBallStopper5 = undefined;
		this.rigidBodyBallStopper6 = undefined;
		this.rigidBodyBallStopper7 = undefined;
		//Part4
		this.meshBallStopper1 = undefined;
		this.meshBallStopper2 = undefined;
		this.meshBallStopper3 = undefined;
		this.meshBallStopper4 = undefined;
		this.meshBallStopper5 = undefined;
		this.meshBallStopper6 = undefined;
		this.meshBallStopper7 = undefined;


		//Part5
		this.rigidBodySecondTower1 = undefined;
		this.rigidBodySecondTower2 = undefined;
		this.rigidBodySecondTower3 = undefined;
		this.rigidBodySecondTower4 = undefined;
		//Part5
		this.meshSecondTower1 = undefined;
		this.meshSecondTower2 = undefined;
		this.meshSecondTower3 = undefined;
		this.meshSecondTower4 = undefined;
		//Part5, Del2
		this.rigidBodyRoadToExplosion1 = undefined;
		this.rigidBodyRoadToExplosion2 = undefined;
		this.rigidBodyRoadToExplosion3 = undefined;
		this.rigidBodyRoadToExplosion4 = undefined;
		this.rigidBodyRoadToExplosion5 = undefined;
		//Part5, Del2
		this.meshRoadToExplosion1 = undefined;
		this.meshRoadToExplosion2 = undefined;
		this.meshRoadToExplosion3 = undefined;
		this.meshRoadToExplosion4 = undefined;
		this.meshRoadToExplosion5 = undefined;


		//Part 6
		this.rigidBodyFinishPlatform = undefined;
		this.rigidBodyFinishFlagPole = undefined;
		this.rigidBodyFinishFlag = undefined;
		//Part6
		this.meshFinishPlatform = undefined;
		this.meshFinishFlagPole = undefined;
		this.meshFinishFlag = undefined;

	}

	create()
	{
		//**************************************************************************DEL 1*********************************************//
		//***********dominobrikke nummer 1***************
		// THREE:
		let geometryDomino1 = new THREE.BoxGeometry( 0.75, 4, 1.5);
		this.meshDomino1 = new THREE.Mesh(geometryDomino1, new THREE.MeshPhongMaterial({color: 'blue'}));
		this.meshDomino1.position.set(-40, 1, 0);
		this.meshDomino1.castShadow = false;
		this.meshDomino1.userData.name = 'domino1';
		// AMMO:
		let boxShapeDomino1 = new Ammo.btBoxShape( new Ammo.btVector3( 0.75/2, 4/2, 1.5/2) );
		this.rigidBodyDomino1 = this.createAmmoRigidBody(boxShapeDomino1, this.meshDomino1, 0.7, 0.5, 1)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyDomino1, this.meshDomino1, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);


		//***********dominobrikke nummer 2***************
		// THREE:
		let geometryDomino2 = new THREE.BoxGeometry( 0.75, 4, 1.5);
		this.meshDomino2 = new THREE.Mesh(geometryDomino2, new THREE.MeshPhongMaterial({color: 'blue'}));
		this.meshDomino2.position.set(-37.5, 1, 0);
		this.meshDomino2.castShadow = false;
		this.meshDomino2.userData.name = 'domino2';
		// AMMO:
		let boxShapeDomino2 = new Ammo.btBoxShape( new Ammo.btVector3( 0.75/2, 4/2, 1.5/2) );
		this.rigidBodyDomino2 = this.createAmmoRigidBody(boxShapeDomino2, this.meshDomino2, 0.7, 0.5, 1)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyDomino2, this.meshDomino2, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********dominobrikke nummer 3***************
		// THREE:
		let geometryDomino3 = new THREE.BoxGeometry( 0.75, 4, 1.5);
		this.meshDomino3 = new THREE.Mesh(geometryDomino3, new THREE.MeshPhongMaterial({color: 'blue'}));
		this.meshDomino3.position.set(-35, 1, 0);
		this.meshDomino3.castShadow = false;
		this.meshDomino3.userData.name = 'domino3';
		// AMMO:
		let boxShapeDomino3 = new Ammo.btBoxShape( new Ammo.btVector3( 0.75/2, 4/2, 1.5/2) );
		this.rigidBodyDomino3 = this.createAmmoRigidBody(boxShapeDomino3, this.meshDomino3, 0.7, 0.5, 1)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyDomino3, this.meshDomino3, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********dominobrikke nummer 4***************
		// THREE:
		let geometryDomino4 = new THREE.BoxGeometry( 0.75, 4, 1.5);
		this.meshDomino4 = new THREE.Mesh(geometryDomino4, new THREE.MeshPhongMaterial({color: 'blue'}));
		this.meshDomino4.position.set(-32.5, 1, 0);
		this.meshDomino4.castShadow = false;
		this.meshDomino4.userData.name = 'domino4';
		// AMMO:
		let boxShapeDomino4 = new Ammo.btBoxShape( new Ammo.btVector3( 0.75/2, 4/2, 1.5/2) );
		this.rigidBodyDomino4 = this.createAmmoRigidBody(boxShapeDomino4, this.meshDomino4, 0.7, 0.5, 1)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyDomino4, this.meshDomino4, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********dominobrikke nummer 5***************
		// THREE:
		let geometryDomino5 = new THREE.BoxGeometry( 0.75, 4, 1.5);
		this.meshDomino5 = new THREE.Mesh(geometryDomino5, new THREE.MeshPhongMaterial({color: 'blue'}));
		this.meshDomino5.position.set(-30, 1, 0);
		this.meshDomino5.castShadow = false;
		this.meshDomino5.userData.name = 'domino5';
		// AMMO:
		let boxShapeDomino5 = new Ammo.btBoxShape( new Ammo.btVector3( 0.75/2, 4/2, 1.5/2) );
		this.rigidBodyDomino5 = this.createAmmoRigidBody(boxShapeDomino5, this.meshDomino5, 0.7, 0.5, 1)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyDomino5, this.meshDomino5, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********dominobrikke nummer 6***************
		// THREE:
		let geometryDomino6 = new THREE.BoxGeometry( 0.75, 4, 1.5);
		this.meshDomino6 = new THREE.Mesh(geometryDomino6, new THREE.MeshPhongMaterial({color: 'blue'}));
		this.meshDomino6.position.set(-18, 1, 0);
		this.meshDomino6.castShadow = false;
		this.meshDomino6.userData.name = 'domino6';
		// AMMO:
		let boxShapeDomino6 = new Ammo.btBoxShape( new Ammo.btVector3( 0.75/2, 4/2, 1.5/2) );
		this.rigidBodyDomino6 = this.createAmmoRigidBody(boxShapeDomino6, this.meshDomino6, 0.7, 0.5, 1)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyDomino6, this.meshDomino6, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********dominobrikke nummer 7(den som er med den andre ballen)***************
		// THREE:
		let geometryDomino7 = new THREE.BoxGeometry( 0.75, 8, 1.5);
		this.meshDomino7 = new THREE.Mesh(geometryDomino7, new THREE.MeshPhongMaterial({color: 'blue'}));
		this.meshDomino7.position.set(-18, 8.2, 0);
		this.meshDomino7.castShadow = false;
		this.meshDomino7.userData.name = 'domino7';
		// AMMO:
		let boxShapeDomino7 = new Ammo.btBoxShape( new Ammo.btVector3( 0.75/2, 8/2, 1.5/2) );
		this.rigidBodyDomino7 = this.createAmmoRigidBody(boxShapeDomino7, this.meshDomino7, 0.7, 0.5, 1)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyDomino7, this.meshDomino7, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********dominobrikke nummer 8***************
		// THREE:
		let geometryDomino8 = new THREE.BoxGeometry( 0.75, 4, 1.5);
		this.meshDomino8 = new THREE.Mesh(geometryDomino8, new THREE.MeshPhongMaterial({color: 'blue'}));
		this.meshDomino8.position.set(-27.5, 1, 0);
		this.meshDomino8.castShadow = false;
		this.meshDomino8.userData.name = 'domino8';
		// AMMO:
		let boxShapeDomino8 = new Ammo.btBoxShape( new Ammo.btVector3( 0.75/2, 4/2, 1.5/2) );
		this.rigidBodyDomino8 = this.createAmmoRigidBody(boxShapeDomino8, this.meshDomino8, 0.7, 0.5, 1)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyDomino8, this.meshDomino8, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********dominobrikke nummer 9***************
		// THREE:
		let geometryDomino9 = new THREE.BoxGeometry( 0.75, 4, 1.5);
		this.meshDomino9 = new THREE.Mesh(geometryDomino9, new THREE.MeshPhongMaterial({color: 'blue'}));
		this.meshDomino9.position.set(-25, 1, 0);
		this.meshDomino9.castShadow = false;
		this.meshDomino9.userData.name = 'domino9';
		// AMMO:
		let boxShapeDomino9 = new Ammo.btBoxShape( new Ammo.btVector3( 0.75/2, 4/2, 1.5/2) );
		this.rigidBodyDomino9 = this.createAmmoRigidBody(boxShapeDomino9, this.meshDomino9, 0.7, 0.5, 1)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyDomino9, this.meshDomino9, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********dominobrikke nummer 10***************
		// THREE:
		let geometryDomino10 = new THREE.BoxGeometry( 0.75, 4, 1.5);
		this.meshDomino10 = new THREE.Mesh(geometryDomino10, new THREE.MeshPhongMaterial({color: 'blue'}));
		this.meshDomino10.position.set(-22.5, 1, 0);
		this.meshDomino10.castShadow = false;
		this.meshDomino10.userData.name = 'domino10';
		// AMMO:
		let boxShapeDomino10 = new Ammo.btBoxShape( new Ammo.btVector3( 0.75/2, 4/2, 1.5/2) );
		this.rigidBodyDomino10 = this.createAmmoRigidBody(boxShapeDomino10, this.meshDomino10, 0.7, 0.5, 1)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyDomino10, this.meshDomino10, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********dominobrikke nummer 11***************
		// THREE:
		let geometryDomino11 = new THREE.BoxGeometry( 0.75, 4, 1.5);
		this.meshDomino11 = new THREE.Mesh(geometryDomino11, new THREE.MeshPhongMaterial({color: 'blue'}));
		this.meshDomino11.position.set(-20, 1, 0);
		this.meshDomino11.castShadow = false;
		this.meshDomino11.userData.name = 'domino11';
		// AMMO:
		let boxShapeDomino11 = new Ammo.btBoxShape( new Ammo.btVector3( 0.75/2, 4/2, 1.5/2) );
		this.rigidBodyDomino11 = this.createAmmoRigidBody(boxShapeDomino10, this.meshDomino11, 0.7, 0.5, 1)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyDomino11, this.meshDomino11, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);


		//**************************************************************************DEL 2*********************************************//
		//Tårn del 1
		// THREE:
		let geometryTowerPart1 = new THREE.BoxGeometry( 10, 4, 1);
		this.meshTowerPart1 = new THREE.Mesh(geometryTowerPart1, new THREE.MeshPhongMaterial({color: 'purple'}));
		this.meshTowerPart1.position.set(-17.5, 10.5, 1.75);
		this.meshTowerPart1.castShadow = false;
		this.meshTowerPart1.userData.name = 'towerPart1';
		// AMMO:
		let boxShapeTowerPart1 = new Ammo.btBoxShape( new Ammo.btVector3( 10/2, 4/2, 1/2) );
		this.rigidBodyTowerPart1 = this.createAmmoRigidBody(boxShapeTowerPart1, this.meshTowerPart1, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyTowerPart1, this.meshTowerPart1, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Tårn del 2
		// THREE:
		let geometryTowerPart2 = new THREE.BoxGeometry( 10, 4, 1);
		this.meshTowerPart2 = new THREE.Mesh(geometryTowerPart2, new THREE.MeshPhongMaterial({color: 'purple'}));
		this.meshTowerPart2.position.set(-17.5, 10.5, -1.75);
		this.meshTowerPart2.castShadow = false;
		this.meshTowerPart2.userData.name = 'towerPart2';
		// AMMO:
		let boxShapeTowerPart2 = new Ammo.btBoxShape( new Ammo.btVector3( 10/2, 4/2, 1/2) );
		this.rigidBodyTowerPart2 = this.createAmmoRigidBody(boxShapeTowerPart2, this.meshTowerPart2, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyTowerPart2, this.meshTowerPart2, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Tårn del 3
		// THREE:
		let geometryTowerPart3 = new THREE.BoxGeometry( 3.5, 0.5, 4);
		this.meshTowerPart3 = new THREE.Mesh(geometryTowerPart3, new THREE.MeshPhongMaterial({color: 'purple'}));
		this.meshTowerPart3.position.set(-20.5, 9.5, 0);
		this.meshTowerPart3.castShadow = false;
		this.meshTowerPart3.userData.name = 'towerPart3';
		// AMMO:
		let boxShapeTowerPart3 = new Ammo.btBoxShape( new Ammo.btVector3( 3.5/2, 0.5/2, 4/2) );
		this.rigidBodyTowerPart3 = this.createAmmoRigidBody(boxShapeTowerPart3, this.meshTowerPart3, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyTowerPart3, this.meshTowerPart3, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Tårn del 4
		// THREE:
		let geometryTowerPart4 = new THREE.BoxGeometry( 3.5, 0.5, 4);
		this.meshTowerPart4 = new THREE.Mesh(geometryTowerPart4, new THREE.MeshPhongMaterial({color: 'purple'}));
		this.meshTowerPart4.position.set(-16, 9.5, 0);
		this.meshTowerPart4.castShadow = false;
		this.meshTowerPart4.userData.name = 'towerPart4';
		// AMMO:
		let boxShapeTowerPart4 = new Ammo.btBoxShape( new Ammo.btVector3( 3.5/2, 0.5/2, 4/2) );
		this.rigidBodyTowerPart4 = this.createAmmoRigidBody(boxShapeTowerPart4, this.meshTowerPart4, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyTowerPart4, this.meshTowerPart4, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Tårn del 5
		// THREE:
		let geometryTowerPart5 = new THREE.BoxGeometry( 1, 3.5, 4.5);
		this.meshTowerPart5 = new THREE.Mesh(geometryTowerPart5, new THREE.MeshPhongMaterial({color: 'purple'}));
		this.meshTowerPart5.position.set(-19.25, 10.5, 0);
		this.meshTowerPart5.castShadow = false;
		this.meshTowerPart5.userData.name = 'towerPart5';
		// AMMO:
		let boxShapeTowerPart5 = new Ammo.btBoxShape( new Ammo.btVector3( 1/2, 3.5/2, 4.5/2) );
		this.rigidBodyTowerPart5 = this.createAmmoRigidBody(boxShapeTowerPart5, this.meshTowerPart5, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyTowerPart5, this.meshTowerPart5, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);




		//**************************************************************************DEL 3*********************************************//
		//Bridge del 1
		// THREE:
		let geometryBridge1 = new THREE.BoxGeometry( 1, 5, 4);
		this.meshBridge1 = new THREE.Mesh(geometryBridge1, new THREE.MeshPhongMaterial({color: 'green'}));
		this.meshBridge1.position.set(-9, 1, 0);
		this.meshBridge1.castShadow = false;
		this.meshBridge1.userData.name = 'bridgePart1';
		// AMMO:
		let boxShapeBridge1 = new Ammo.btBoxShape( new Ammo.btVector3( 1/2, 5/2, 4/2) );
		this.rigidBodyBridge1 = this.createAmmoRigidBody(boxShapeBridge1, this.meshBridge1, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyBridge1, this.meshBridge1, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Bridge del 2
		// THREE:
		let geometryBridge2 = new THREE.BoxGeometry( 12, 1, 4);
		this.meshBridge2 = new THREE.Mesh(geometryBridge2, new THREE.MeshPhongMaterial({color: 'green'}));
		this.meshBridge2.position.set(-8, 3.9, 0);
		this.meshBridge2.castShadow = false;
		this.meshBridge2.userData.name = 'bridgePart2';
		// AMMO:
		let boxShapeBridge2 = new Ammo.btBoxShape( new Ammo.btVector3( 12/2, 1/2, 4/2) );
		this.rigidBodyBridge2 = this.createAmmoRigidBody(boxShapeBridge2, this.meshBridge2, 0.7, 0.5, 10)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyBridge2, this.meshBridge2, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Bridge del 3
		// THREE:
		let geometryBridge3 = new THREE.BoxGeometry( 1, 2, 4);
		this.meshBridge3 = new THREE.Mesh(geometryBridge3, new THREE.MeshPhongMaterial({color: 'green'}));
		this.meshBridge3.position.set(-2, 1, 0);
		this.meshBridge3.castShadow = false;
		this.meshBridge3.userData.name = 'bridgePart3';
		// AMMO:
		let boxShapeBridge3 = new Ammo.btBoxShape( new Ammo.btVector3( 1/2, 2/2, 4/2) );
		this.rigidBodyBridge3 = this.createAmmoRigidBody(boxShapeBridge3, this.meshBridge3, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyBridge3, this.meshBridge3, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);




		//**************************************************************************DEL 4*********************************************//
		//Ball Flipper del 1
		// THREE:
		let geometryFlipperPart1 = new THREE.BoxGeometry( 20, 2, 4);
		this.meshFlipperPart1 = new THREE.Mesh(geometryFlipperPart1, new THREE.MeshPhongMaterial({color: 'orange'}));
		this.meshFlipperPart1.position.set(10, 0, 0);
		this.meshFlipperPart1.castShadow = false;
		this.meshFlipperPart1.userData.name = 'flipperPart1';
		// AMMO:
		let boxShapeFlipperPart1 = new Ammo.btBoxShape( new Ammo.btVector3( 20/2, 2/2, 4/2) );
		this.rigidBodyFlipperPart1 = this.createAmmoRigidBody(boxShapeFlipperPart1, this.meshFlipperPart1, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyFlipperPart1, this.meshFlipperPart1, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Ball Flipper del 2
		// THREE:
		let geometryFlipperPart2 = new THREE.BoxGeometry( 20, 4, 1);
		this.meshFlipperPart2 = new THREE.Mesh(geometryFlipperPart2, new THREE.MeshPhongMaterial({color: 'orange'}));
		this.meshFlipperPart2.position.set(10, 0, 2);
		this.meshFlipperPart2.castShadow = false;
		this.meshFlipperPart2.userData.name = 'flipperPart2';
		// AMMO:
		let boxShapeFlipperPart2 = new Ammo.btBoxShape( new Ammo.btVector3( 20/2, 4/2, 1/2) );
		this.rigidBodyFlipperPart2 = this.createAmmoRigidBody(boxShapeFlipperPart2, this.meshFlipperPart2, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyFlipperPart2, this.meshFlipperPart2, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Ball Flipper del 3
		// THREE:
		let geometryFlipperPart3 = new THREE.BoxGeometry( 20, 4, 1);
		this.meshFlipperPart3 = new THREE.Mesh(geometryFlipperPart3, new THREE.MeshPhongMaterial({color: 'orange'}));
		this.meshFlipperPart3.position.set(10, 0, -2);
		this.meshFlipperPart3.castShadow = false;
		this.meshFlipperPart3.userData.name = 'flipperPart3';
		// AMMO:
		let boxShapeFlipperPart3 = new Ammo.btBoxShape( new Ammo.btVector3( 20/2, 4/2, 1/2) );
		this.rigidBodyFlipperPart3 = this.createAmmoRigidBody(boxShapeFlipperPart3, this.meshFlipperPart3, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyFlipperPart3, this.meshFlipperPart3, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Ball Flipper del 4
		// THREE:
		let geometryFlipperPart4 = new THREE.BoxGeometry( 1, 4, 20);
		this.meshFlipperPart4 = new THREE.Mesh(geometryFlipperPart4, new THREE.MeshPhongMaterial({color: 'orange'}));
		this.meshFlipperPart4.position.set(19.5, 2, -12);
		this.meshFlipperPart4.castShadow = false;
		this.meshFlipperPart4.userData.name = 'flipperPart4';
		// AMMO:
		let boxShapeFlipperPart4 = new Ammo.btBoxShape( new Ammo.btVector3( 1/2, 4/2, 20/2) );
		this.rigidBodyFlipperPart4 = this.createAmmoRigidBody(boxShapeFlipperPart4, this.meshFlipperPart4, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyFlipperPart4, this.meshFlipperPart4, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Ball Flipper del 5
		// THREE:
		let geometryFlipperPart5 = new THREE.BoxGeometry( 1, 4, 17);
		this.meshFlipperPart5 = new THREE.Mesh(geometryFlipperPart5, new THREE.MeshPhongMaterial({color: 'orange'}));
		this.meshFlipperPart5.position.set(25, 2, -13);
		this.meshFlipperPart5.castShadow = false;
		this.meshFlipperPart5.userData.name = 'flipperPart5';
		// AMMO:
		let boxShapeFlipperPart5 = new Ammo.btBoxShape( new Ammo.btVector3( 1/2, 4/2, 17/2) );
		this.rigidBodyFlipperPart5 = this.createAmmoRigidBody(boxShapeFlipperPart5, this.meshFlipperPart5, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyFlipperPart5, this.meshFlipperPart5, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Ball Flipper del 6
		// THREE:
		let geometryFlipperPart6 = new THREE.BoxGeometry( 5, 7, 0.5);
		this.meshFlipperPart6 = new THREE.Mesh(geometryFlipperPart6, new THREE.MeshPhongMaterial({color: 'orange'}));
		this.meshFlipperPart6.position.set(21, 1, -25);
		this.meshFlipperPart6.castShadow = false;
		this.meshFlipperPart6.userData.name = 'flipperPart6';
		// AMMO:
		let boxShapeFlipperPart6 = new Ammo.btBoxShape( new Ammo.btVector3( 5/2, 7/2, 0.5/2) );
		this.rigidBodyFlipperPart6 = this.createAmmoRigidBody(boxShapeFlipperPart6, this.meshFlipperPart6, 0.7, 0.5, 1)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyFlipperPart6, this.meshFlipperPart6, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Ball Flipper del 7
		// THREE:
		let geometryFlipperPart7 = new THREE.BoxGeometry( 1.5, 7, 0.5);
		this.meshFlipperPart7 = new THREE.Mesh(geometryFlipperPart7, new THREE.MeshPhongMaterial({color: 'orange'}));
		this.meshFlipperPart7.position.set(21, 10.1, -25);
		this.meshFlipperPart7.castShadow = false;
		this.meshFlipperPart7.userData.name = 'flipperPart7';
		// AMMO:
		let boxShapeFlipperPart7 = new Ammo.btBoxShape( new Ammo.btVector3( 1.5/2, 7/2, 0.5/2) );
		this.rigidBodyFlipperPart7 = this.createAmmoRigidBody(boxShapeFlipperPart7, this.meshFlipperPart7, 0.7, 0.5, 1)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyFlipperPart7, this.meshFlipperPart7, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Ball Flipper del 8
		// THREE:
		let geometryFlipperPart8 = new THREE.BoxGeometry( 6.5, 0.5, 19.5);
		this.meshFlipperPart8 = new THREE.Mesh(geometryFlipperPart8, new THREE.MeshPhongMaterial({color: 'orange', opacity:0.5, transparent: true}));
		this.meshFlipperPart8.position.set(22, 4.25, -12);
		this.meshFlipperPart8.castShadow = false;
		this.meshFlipperPart8.userData.name = 'flipperPart8';
		// AMMO:
		let boxShapeFlipperPart8 = new Ammo.btBoxShape( new Ammo.btVector3( 6.5/2, 0.5/2, 19.5/2) );
		this.rigidBodyFlipperPart8 = this.createAmmoRigidBody(boxShapeFlipperPart8, this.meshFlipperPart8, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyFlipperPart8, this.meshFlipperPart8, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);




		//**************************************************************************DEL 5*********************************************//
		//Second Tower Part 1
		// THREE:
		let geometrySecondTower1 = new THREE.BoxGeometry( 8, 1, 3.5);
		this.meshSecondTower1 = new THREE.Mesh(geometrySecondTower1, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshSecondTower1.position.set(21, 10, -22);
		this.meshSecondTower1.castShadow = false;
		this.meshSecondTower1.userData.name = 'secondTower1';
		// AMMO:
		let boxShapeSecondTower1 = new Ammo.btBoxShape( new Ammo.btVector3( 8/2, 1/2, 3.5/2) );
		this.rigidBodySecondTower1 = this.createAmmoRigidBody(boxShapeSecondTower1, this.meshSecondTower1, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodySecondTower1, this.meshSecondTower1, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Second Tower Part 2
		// THREE:
		let geometrySecondTower2 = new THREE.BoxGeometry( 8, 1, 3.5);
		this.meshSecondTower2 = new THREE.Mesh(geometrySecondTower2, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshSecondTower2.position.set(21, 10, -27.5);
		this.meshSecondTower2.castShadow = false;
		this.meshSecondTower2.userData.name = 'secondTower2';
		// AMMO:
		let boxShapeSecondTower2 = new Ammo.btBoxShape( new Ammo.btVector3( 8/2, 1/2, 3.5/2) );
		this.rigidBodySecondTower2 = this.createAmmoRigidBody(boxShapeSecondTower2, this.meshSecondTower2, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodySecondTower2, this.meshSecondTower2, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Second Tower Part 3
		// THREE:
		let geometrySecondTower3 = new THREE.BoxGeometry( 2.5, 1, 8);
		this.meshSecondTower3 = new THREE.Mesh(geometrySecondTower3, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshSecondTower3.position.set(23.75, 10, -25);
		this.meshSecondTower3.castShadow = false;
		this.meshSecondTower3.userData.name = 'secondTower3';
		// AMMO:
		let boxShapeSecondTower3 = new Ammo.btBoxShape( new Ammo.btVector3( 2.5/2, 1/2, 8/2) );
		this.rigidBodySecondTower3 = this.createAmmoRigidBody(boxShapeSecondTower3, this.meshSecondTower3, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodySecondTower3, this.meshSecondTower3, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Second Tower Part 4
		// THREE:
		let geometrySecondTower4 = new THREE.BoxGeometry( 2.5, 1, 8);
		this.meshSecondTower4 = new THREE.Mesh(geometrySecondTower4, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshSecondTower4.position.set(18.25, 10, -25);
		this.meshSecondTower4.castShadow = false;
		this.meshSecondTower4.userData.name = 'secondTower4';
		// AMMO:
		let boxShapeSecondTower4 = new Ammo.btBoxShape( new Ammo.btVector3( 2.5/2, 1/2, 8/2) );
		this.rigidBodySecondTower4 = this.createAmmoRigidBody(boxShapeSecondTower4, this.meshSecondTower4, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodySecondTower4, this.meshSecondTower4, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);


		//**************************************************************************DEL 5 PART 2*********************************************//
		//Vei til eksplosjon part 1
		// THREE:
		let geometryRoadToExplosion1 = new THREE.BoxGeometry( 25, 1, 4);
		this.meshRoadToExplosion1 = new THREE.Mesh(geometryRoadToExplosion1, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshRoadToExplosion1.position.set(7, 5.15, -25);
		this.meshRoadToExplosion1.rotateZ(0.4);
		this.meshRoadToExplosion1.castShadow = false;
		this.meshRoadToExplosion1.userData.name = 'roadToExplosion1';
		// AMMO:
		let boxShapeRoadToExplosion1 = new Ammo.btBoxShape( new Ammo.btVector3( 25/2, 1/2, 4/2) );
		this.rigidBodyRoadToExplosion1 = this.createAmmoRigidBody(boxShapeRoadToExplosion1, this.meshRoadToExplosion1, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyRoadToExplosion1, this.meshRoadToExplosion1, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Vei til eksplosjon part 2
		// THREE:
		let geometryRoadToExplosion2 = new THREE.BoxGeometry( 5, 1, 1);
		this.meshRoadToExplosion2 = new THREE.Mesh(geometryRoadToExplosion2, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshRoadToExplosion2.position.set(21, 13, -26.1);
		this.meshRoadToExplosion2.rotateZ(0.4);
		this.meshRoadToExplosion2.castShadow = false;
		this.meshRoadToExplosion2.userData.name = 'roadToExplosion2';
		// AMMO:
		let boxShapeRoadToExplosion2 = new Ammo.btBoxShape( new Ammo.btVector3( 5/2, 1/2, 1/2) );
		this.rigidBodyRoadToExplosion2 = this.createAmmoRigidBody(boxShapeRoadToExplosion2, this.meshRoadToExplosion2, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyRoadToExplosion2, this.meshRoadToExplosion2, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Vei til eksplosjon part 3
		// THREE:
		let geometryRoadToExplosion3 = new THREE.BoxGeometry( 5, 1, 1);
		this.meshRoadToExplosion3 = new THREE.Mesh(geometryRoadToExplosion3, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshRoadToExplosion3.position.set(21, 13, -23.9);
		this.meshRoadToExplosion3.rotateZ(0.4);
		this.meshRoadToExplosion3.castShadow = false;
		this.meshRoadToExplosion3.userData.name = 'roadToExplosion3';
		// AMMO:
		let boxShapeRoadToExplosion3 = new Ammo.btBoxShape( new Ammo.btVector3( 5/2, 1/2, 1/2) );
		this.rigidBodyRoadToExplosion3 = this.createAmmoRigidBody(boxShapeRoadToExplosion3, this.meshRoadToExplosion3, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyRoadToExplosion3, this.meshRoadToExplosion3, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Vei til eksplosjon part 4
		// THREE:
		let geometryRoadToExplosion4 = new THREE.BoxGeometry( 25, 5, 1);
		this.meshRoadToExplosion4 = new THREE.Mesh(geometryRoadToExplosion4, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshRoadToExplosion4.position.set(7, 5.15, -26.5);
		this.meshRoadToExplosion4.rotateZ(0.4);
		this.meshRoadToExplosion4.castShadow = false;
		this.meshRoadToExplosion4.userData.name = 'roadToExplosion4';
		// AMMO:
		let boxShapeRoadToExplosion4 = new Ammo.btBoxShape( new Ammo.btVector3( 25/2, 5/2, 1/2) );
		this.rigidBodyRoadToExplosion4 = this.createAmmoRigidBody(boxShapeRoadToExplosion4, this.meshRoadToExplosion4, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyRoadToExplosion4, this.meshRoadToExplosion4, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Vei til eksplosjon part 5
		// THREE:
		let geometryRoadToExplosion5 = new THREE.BoxGeometry( 25, 5, 1);
		this.meshRoadToExplosion5 = new THREE.Mesh(geometryRoadToExplosion5, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshRoadToExplosion5.position.set(7, 5.15, -23.5);
		this.meshRoadToExplosion5.rotateZ(0.4);
		this.meshRoadToExplosion5.castShadow = false;
		this.meshRoadToExplosion5.userData.name = 'roadToExplosion5';
		// AMMO:
		let boxShapeRoadToExplosion5 = new Ammo.btBoxShape( new Ammo.btVector3( 25/2, 5/2, 1/2) );
		this.rigidBodyRoadToExplosion5 = this.createAmmoRigidBody(boxShapeRoadToExplosion5, this.meshRoadToExplosion5, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyRoadToExplosion5, this.meshRoadToExplosion5, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);


		//**************************************************************************DEL 6*********************************************//
		//Finish part 1
		// THREE:
		let geometryFinishPlatform = new THREE.BoxGeometry( 25, 1, 4);
		this.meshFinishPlatform = new THREE.Mesh(geometryFinishPlatform, new THREE.MeshPhongMaterial({color: 'yellow'}));
		this.meshFinishPlatform.position.set(-17, 0, -25);
		this.meshFinishPlatform.castShadow = false;
		this.meshFinishPlatform.userData.name = 'finishPlatform';
		// AMMO:
		let boxShapeFinishPlatform = new Ammo.btBoxShape( new Ammo.btVector3( 25/2, 1/2, 4/2) );
		this.rigidBodyFinishPlatform = this.createAmmoRigidBody(boxShapeFinishPlatform, this.meshFinishPlatform, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyFinishPlatform, this.meshFinishPlatform, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Finish part 2
		// THREE:
		let geometryFinishFlagPole = new THREE.BoxGeometry( 1, 15, 1);
		this.meshFinishFlagPole = new THREE.Mesh(geometryFinishFlagPole, new THREE.MeshPhongMaterial({color: 'yellow'}));
		this.meshFinishFlagPole.position.set(-27.5, 7.5, -25);
		this.meshFinishFlagPole.castShadow = false;
		this.meshFinishFlagPole.userData.name = 'finishFlagPole';
		// AMMO:
		let boxShapeFinishFlagPole = new Ammo.btBoxShape( new Ammo.btVector3( 1/2, 30/2, 1/2) );
		this.rigidBodyFinishFlagPole = this.createAmmoRigidBody(boxShapeFinishFlagPole, this.meshFinishFlagPole, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyFinishFlagPole, this.meshFinishFlagPole, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//Finish part 3
		// THREE:
		let geometryFinishFlag = new THREE.BoxGeometry( 8, 5, 0.5);
		this.meshFinishFlag = new THREE.Mesh(geometryFinishFlag, new THREE.MeshPhongMaterial({color: 'yellow'}));
		this.meshFinishFlag.position.set(-31.5, 12, -25);
		this.meshFinishFlag.castShadow = false;
		this.meshFinishFlag.userData.name = 'finishFlag';
		// AMMO:
		let boxShapeFinishFlag = new Ammo.btBoxShape( new Ammo.btVector3( 2.5/2, 2.5/2, 2.5/2) );
		this.rigidBodyFinishFlag = this.createAmmoRigidBody(boxShapeFinishFlag, this.meshFinishFlag, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyFinishFlag, this.meshFinishFlag, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);



	}
	keyCheck(deltaTime, currentlyPressedKeys) {}
}

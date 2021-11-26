export class AmmoPhysics
{
	constructor()
	{
		this.ammoPhysicsWorld = undefined;
		this.scene = undefined,
		this.rigidBodies = [],
		this.tmpTrans = undefined;
		this.rigidBodies = [];
		this.COLLISION_GROUP_PLANE = 1;
		this.COLLISION_GROUP_SPHERE = 2;
		this.COLLISION_GROUP_CONVEX = 4;
		this.COLLISION_GROUP_COMPOUND = 8;
		this.COLLISION_GROUP_MOVEABLE = 16;
		this.COLLISION_GROUP_TRIANGLE = 32;
		this.COLLISION_GROUP_HINGE_SPHERE =  64;
		this.COLLISION_GROUP_BOX =  128;
	}

	init(scene)
	{
		if (!scene)
		{
			console.log("Mangler three-sceneobjekt.")
			return;
		}
		this.scene = scene;
		this.tmpTrans = new Ammo.btTransform();

		let collisionConfiguration  = new Ammo.btDefaultCollisionConfiguration(),
			dispatcher          = new Ammo.btCollisionDispatcher(collisionConfiguration),
			overlappingPairCache= new Ammo.btDbvtBroadphase(),
			solver              = new Ammo.btSequentialImpulseConstraintSolver();

		this.ammoPhysicsWorld   = new Ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
		this.ammoPhysicsWorld.setGravity(new Ammo.btVector3(0, -9.81, 0));
	}

	updatePhysics( deltaTime )
	{
		if (!this.tmpTrans)
			return;

		this.ammoPhysicsWorld.stepSimulation( deltaTime, 10 );

		for ( let i = 0; i < this.rigidBodies.length; i++ )
		{
			let objThree = this.rigidBodies[ i ];
			let objAmmo = objThree.userData.physicsBody;
			let ms = objAmmo.getMotionState();
			if ( ms )
			{
				ms.getWorldTransform( this.tmpTrans );
				let p = this.tmpTrans.getOrigin();
				let q = this.tmpTrans.getRotation();
				objThree.position.set( p.x(), p.y(), p.z() );
				objThree.quaternion.set( q.x(), q.y(), q.z(), q.w() );
			}
		}
	}

	addPhysicsObject(rb, mesh, setCollisionMask, collisionGroup, collisionMask)
	{
		if (setCollisionMask)
		{
			this.ammoPhysicsWorld.addRigidBody(rb, collisionGroup, collisionMask);
		}
		else
		{
			this.ammoPhysicsWorld.addRigidBody(rb);
		}
		this.scene.add(mesh);
		this.rigidBodies.push(mesh);
		mesh.userData.physicsBody = rb;
	}

	addConstraint(constraint, disableCollisions)
	{
		this.ammoPhysicsWorld.addConstraint(constraint, disableCollisions);
	}
}

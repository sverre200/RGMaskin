import * as THREE from "../../lib/three/build/three.module.js";
import { TrackballControls } from '../../lib/three/examples/jsm/controls/TrackballControls.js';
import { addCoordSystem} from "../../lib/wfa-coord.js";
import Stats from '../../lib/three/examples/jsm/libs/stats.module.js';
import {MyPhysicsTerrain} from "./MyPhysicsTerrain.js";
import {Boxes} from "./Geometry/Boxes.js";
import {Spheres} from "./Geometry/Spheres.js";
import {AmmoPhysics} from "./AmmoPhysics.js";
import {MyPhysicsHinge} from "./Geometry/MyPhysicsHinge.js";


export class AmmoShapesApp
{
	constructor()
	{
		this.clock = new THREE.Clock();
		this.scene = undefined;
		this.renderer = undefined;
		this.controls = undefined;
		this.currentlyPressedKeys = [];
		//Audio fil hentet fra https://www.epidemicsound.com/music/featured/

		document.addEventListener('keyup', this.handleKeyUp.bind(this), {passive: false});
		document.addEventListener('keydown', this.handleKeyDown.bind(this), {passive: false});
		window.addEventListener('resize', this.onWindowResize.bind(this), {passive: false});

		this.stats = new Stats();
		this.stats.showPanel( 0 );
		document.body.appendChild( this.stats.dom );

		this.physicsTerrain = undefined;
		this.domino = undefined;
		this.spherespart1 = undefined;
		this.boxespart1 = undefined;
		this.physicsHinge = undefined;
		this.fireworks = undefined;
	}

	start()
	{
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color( 0xffffff );
		this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.2, 5000 );
		this.camera.position.set( 15, 30, 50 );
		this.camera.lookAt(new THREE.Vector3(0, 0, 0));

		let dirLight1 = new THREE.DirectionalLight( 0xffffff , 1);
		dirLight1.color.setHSL( 0.1, 1, 0.95 );
		dirLight1.position.set( -0.1, 1.75, 0.1 );
		dirLight1.position.multiplyScalar( 100 );
		dirLight1.castShadow = true;
		let dLight = 500;
		let sLight = dLight;
		dirLight1.shadow.camera.left = - sLight;
		dirLight1.shadow.camera.right = sLight;
		dirLight1.shadow.camera.top = sLight;
		dirLight1.shadow.camera.bottom = - sLight;

		dirLight1.shadow.camera.near = dLight / 30;
		dirLight1.shadow.camera.far = dLight;

		dirLight1.shadow.mapSize.x = 1024 * 2;
		dirLight1.shadow.mapSize.y = 1024 * 2;

		this.scene.add( dirLight1 );

		this.renderer = new THREE.WebGLRenderer( { antialias: true } );
		this.renderer.setClearColor( 0xbfd1e5 );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );

		this.renderer.shadowMap.enabled = true;

		addCoordSystem(this.scene);

		this.controls = new TrackballControls(this.camera, this.renderer.domElement);
		this.controls.addEventListener( 'change', this.render);

		this.ammoPhysicsWorld = new AmmoPhysics();
		this.ammoPhysicsWorld.init(this.scene);

		this.physicsTerrain = new MyPhysicsTerrain(this.ammoPhysicsWorld);
		this.physicsTerrain.create();

		this.domino = new Boxes(this.ammoPhysicsWorld);
		this.domino.create();

		this.boxespart1 = new MyPhysicsHinge(this.ammoPhysicsWorld);
		this.boxespart1.create();

		this.spherespart1 = new Spheres(this.ammoPhysicsWorld);
		this.spherespart1.create();

		this.physicsHinge = new MyPhysicsHinge(this.ammoPhysicsWorld);
		this.physicsHinge.create();

		this.animate();
	}

	animate()
	{
		requestAnimationFrame(this.animate.bind(this));

		this.stats.begin();

		let deltaTime = this.clock.getDelta();
		this.ammoPhysicsWorld.updatePhysics(deltaTime);

		this.keyCheck(deltaTime);

		this.render();

		if (this.controls)
			this.controls.update();

		this.stats.end();
	}

	onWindowResize()
	{
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.controls.handleResize();
		this.animate();
	}

	render()
	{
		if (this.renderer)
			this.renderer.render(this.scene, this.camera);
	}

	handleKeyUp(event)
	{
		this.currentlyPressedKeys[event.keyCode] = false;
	}

	handleKeyDown(event)
	{
		this.currentlyPressedKeys[event.keyCode] = true;
	}

	keyCheck(elapsed)
	{
		if (this.physicsHinge)
			this.physicsHinge.keyCheck(elapsed, this.currentlyPressedKeys);
		if ((this.currentlyPressedKeys)[80])
		{	//P
			this.addParticles();
			document.getElementById('fireworks').play();
		}
	}

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






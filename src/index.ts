import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera"
import { Engine } from "@babylonjs/core/Engines/engine"
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight"
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder"
import { Scene } from "@babylonjs/core/scene"
import { Vector3, Quaternion } from "@babylonjs/core/Maths/math.vector"
// standard material must be imported for the default material when `undefined`
import "@babylonjs/core/Materials/standardMaterial";

const view = document.getElementById("renderCanvas") as HTMLCanvasElement;
const engine = new Engine(view, true);

const scene = new Scene(engine);

const camera = new FreeCamera(
    "camera",
    new Vector3(0, 1, 10),
    scene);

camera.setTarget(Vector3.Zero());

camera.attachControl(view, true);

const light = new HemisphericLight(
    "light",
    new Vector3(0, 1, 0),
    scene);
light.intensity = 0.7;

// const sphere = MeshBuilder.CreateSphere("sphere",  {diameter: 1, segments: 32}, scene);
const sphere = MeshBuilder.CreateBox("sphere", {size: 2}, scene);
sphere.position.y = 1;

const ground = MeshBuilder.CreateGround("ground", {width: 60, height: 60}, scene);

//const material =  new SampleMaterial("material", scene)
//ground.material = material;
let q: number = 0.1;

engine.runRenderLoop(() => {
  scene.render();
  sphere.rotate(new Vector3(0, 1, 0), q);
 q = 0.01;
});

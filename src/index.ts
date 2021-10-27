
import { Utils } from "./lib/utils";
import { HelloWorld } from "./helloWorld";
import { TextureMaterial } from "./textureMaterial";
import { ModelScene } from "./modelScene";
import { CharacterAnim } from "./characterAnim";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
Utils.assert(canvas);

// Scene - Hello World
let scene1Btn = document.createElement('button');
scene1Btn.textContent = "Hello World";

scene1Btn.addEventListener('click', event => {
    canvas.style.display = "block";
    let demo = new HelloWorld(canvas);
    demo.createScene();
    demo.animate();
});

document.body.appendChild(scene1Btn);

// Scene - Texture material
let scene2Btn = document.createElement('button');
scene2Btn.textContent = "Texture material";

scene2Btn.addEventListener('click', event => {
    canvas.style.display = "block";
    let demo = new TextureMaterial(canvas);
    demo.createScene();
    demo.animate();
});

document.body.appendChild(scene2Btn);

// Scene - Model Scene
let scene3Btn = document.createElement('button');
scene3Btn.textContent = "Model scene";

scene3Btn.addEventListener('click', event => {
    canvas.style.display = "block";
    let demo = new ModelScene(canvas);
    demo.createScene();
    demo.animate();
});

document.body.appendChild(scene3Btn);

// Scene - Character Animation
let scene4Btn = document.createElement('button');
scene4Btn.textContent = "Character anim";

scene4Btn.addEventListener('click', event => {
    canvas.style.display = "block";
    let demo = new CharacterAnim(canvas);
    demo.createScene();
    demo.animate();
});

document.body.appendChild(scene4Btn);

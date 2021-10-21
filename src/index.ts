
import { Utils } from "./lib/utils";
import { HelloWorld } from "./helloWorld";
import { TextureMaterial } from "./textureMaterial";

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

// Scene - Sphere World
let scene2Btn = document.createElement('button');
scene2Btn.textContent = "Texture material";

scene2Btn.addEventListener('click', event => {
    canvas.style.display = "block";
    let demo = new TextureMaterial(canvas);
    demo.createScene();
    demo.animate();
});

document.body.appendChild(scene2Btn);

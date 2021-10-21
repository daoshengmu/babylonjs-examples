import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera"
import { Engine } from "@babylonjs/core/Engines/engine"
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight"
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder"
import { Mesh } from "@babylonjs/core/Meshes/mesh"
import { Scene } from "@babylonjs/core/scene"
import { Vector3, Quaternion } from "@babylonjs/core/Maths/math.vector"
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial"
import { Color3 } from "@babylonjs/core"
import { IDemo } from "./lib/IDemo"

export class HelloWorld extends IDemo {
  
  // constructor(canvas: HTMLCanvasElement) {
  //   Utils.assert(canvas, "canvas can't be null.");
  //   this.canvas_ = canvas;
  //   this.engine_ = new Engine(canvas, true);
  // }

  createScene(): void {
    this.scene_ = new Scene(this.engine_);
    this.camera_ = new FreeCamera(
      "camera",
      new Vector3(0, 1, 10),
      this.scene_);
    this.camera_.setTarget(Vector3.Zero());
    this.camera_.attachControl(this.canvas_, true);

    let light = new HemisphericLight("light", new Vector3(1, 1, 0), this.scene_);
    light.intensity = 0.7;
    this.box_ = MeshBuilder.CreateBox("box", {size: 2}, this.scene_);
    this.box_.position.y = 1;
    let boxMtr = new StandardMaterial("boxMtr", this.scene_);
    boxMtr.diffuseColor = new Color3(0, 1, 0);
    this.box_.material = boxMtr;
    let ground = MeshBuilder.CreateGround("ground", {width: 60, height: 60}, this.scene_);
  }

  animate(): void {
    // run the render loop
    this.engine_.runRenderLoop(() => {
      if (this.scene_) {
        this.scene_.render();
      }
      
      let q : number = 0.01;
      this.box_.rotate(new Vector3(0, 1, 0), q);
    });

    // the canvas/window resize event handler
    window.addEventListener('resize', () => {
      this.engine_.resize();
    });
  }

  private camera_!: FreeCamera;
  private box_!: Mesh;
};
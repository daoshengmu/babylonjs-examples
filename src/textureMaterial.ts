
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight"
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder"
import { Mesh } from "@babylonjs/core/Meshes/mesh"
import { Scene } from "@babylonjs/core/scene"
import { Vector3 } from "@babylonjs/core/Maths/math.vector"
import { IDemo } from "./lib/IDemo"
import { ArcRotateCamera, Color3, SceneLoader, StandardMaterial, Texture } from "@babylonjs/core"

export class TextureMaterial extends IDemo {

  createScene(): void {
    this.scene_ = new Scene(this.engine_);
    this.camera_ = new ArcRotateCamera(
      "camera", -Math.PI / 2, Math.PI / 2.5, 20, new Vector3(0, 0, 0), this.scene_);
    this.camera_.attachControl(this.canvas_, true);

    let light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene_);
    light.intensity = 0.7;
    this.sphere_ = MeshBuilder.CreateSphere("sphere", {diameter: 5}, this.scene_);
    this.sphere_.position.y = 3;
    let sphereMtr = new StandardMaterial("sphereMtr", this.scene_);
    sphereMtr.diffuseColor = new Color3(1, 1, 1);
    sphereMtr.diffuseTexture = new Texture("./images/roof.jpg", this.scene_);
    this.sphere_.material = sphereMtr;
    let ground = MeshBuilder.CreateGround("ground", {width: 60, height: 60}, this.scene_);
  }

  animate(): void {
    // run the render loop
    this.engine_.runRenderLoop(() => {
      if (this.scene_) {
        this.scene_.render();
      }
      
      let q : number = 0.01;
      this.sphere_.rotate(new Vector3(0, 1, 0), q);
    });

    // the canvas/window resize event handler
    window.addEventListener('resize', () => {
      this.engine_.resize();
    });
  }

  private camera_!: ArcRotateCamera;
  private sphere_!: Mesh;
};
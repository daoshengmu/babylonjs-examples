import { Scene } from "@babylonjs/core/scene"
import { Vector3 } from "@babylonjs/core/Maths/math.vector"
import { ArcRotateCamera, CubeTexture, SceneLoader } from "@babylonjs/core"
import { IDemo } from "./lib/IDemo"
import "@babylonjs/loaders/glTF/2.0/glTFLoader"

export class ModelScene extends IDemo {

  createScene(): void {
    this.scene_ = new Scene(this.engine_);
    let cubeMap: CubeTexture = CubeTexture.CreateFromPrefilteredData("./images/environment.dds", this.scene_);
    this.scene_.createDefaultSkybox(cubeMap, true);

    this.scene_.createDefaultCameraOrLight(true, true, true);
    let arcCamera : ArcRotateCamera = this.scene_.activeCamera as ArcRotateCamera;
    arcCamera.alpha += Math.PI;
    arcCamera.setPosition(new Vector3(0, 0, 0.5));

    SceneLoader.Append("models/", "BoomBox.glb", this.scene_, function(scene) {
      let mesh = scene.getMeshByID("BoomBox");
      if (mesh) {
        mesh.id = "BoomBox_glb";
        mesh.scaling = new Vector3(10, 10, 10);
        mesh.position = new Vector3(0.15, 0, 0);
      }
    });

    SceneLoader.Append("models/BoomBox/", "BoomBox.gltf", this.scene_, function(scene) {
      let mesh = scene.getMeshByID("BoomBox");
      if (mesh) {
        mesh.id = "BoomBox_gltf";
        mesh.scaling = new Vector3(10, 10, 10);
        mesh.position = new Vector3(-0.15, 0, 0);
      }
    });
  }

  animate(): void {
    // run the render loop
    this.engine_.runRenderLoop(() => {
      if (this.scene_) {
        this.scene_.render();
      }
    });

    // the canvas/window resize event handler
    window.addEventListener('resize', () => {
      this.engine_.resize();
    });
  }

};
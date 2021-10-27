import { Scene } from "@babylonjs/core/scene"
import { Vector3 } from "@babylonjs/core/Maths/math.vector"
import { ArcRotateCamera, SceneLoader } from "@babylonjs/core"
import { IDemo } from "./lib/IDemo"
import "@babylonjs/loaders/glTF/2.0/glTFLoader"

export class CharacterAnim extends IDemo {

  createScene(): void {
    this.scene_ = new Scene(this.engine_);
    this.scene_.createDefaultCameraOrLight(true, true, true);
    this.scene_.createDefaultEnvironment();

    let arcCamera : ArcRotateCamera = this.scene_.activeCamera as ArcRotateCamera;
    arcCamera.setPosition(new Vector3(0, 2, -2.2));

    let scene = this.scene_;
    SceneLoader.ImportMesh("", "models/Dude/", "dude.babylon", this.scene_,
      function(meshes, particleSystem, skeletons) {
        meshes[0].scaling = new Vector3(0.01, 0.01, 0.01);
        scene.beginAnimation(skeletons[0], 0, 100, true, 1.0);
      }
    );
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
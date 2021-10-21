import { Engine } from "@babylonjs/core/Engines";
import { Scene } from "@babylonjs/core/scene";
import { Utils } from "./utils";

export class IDemo {
  public constructor(canvas: HTMLCanvasElement) {
    Utils.assert(canvas, "canvas can't be null.");
    this.canvas_ = canvas;
    this.engine_ = new Engine(canvas, true);
  }

  public createScene(): void {

  }

  public animate(): void {

  }

  protected canvas_ : HTMLCanvasElement;
  protected engine_ : Engine;
  protected scene_!: Scene;
}
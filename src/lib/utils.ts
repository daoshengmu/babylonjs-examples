
export class Utils {
  public static assert(condition: any, msg?: string): asserts condition {
    if (!condition) {
      throw new Error(msg? msg : "assertion.");
    }
  }
}

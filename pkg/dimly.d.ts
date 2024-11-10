/* tslint:disable */
/* eslint-disable */
export class Vec2 {
  free(): void;
  /**
   * @param {number} x
   * @param {number} y
   * @returns {Vec2}
   */
  static new(x: number, y: number): Vec2;
  /**
   * @param {Vec2} other
   * @returns {Vec2}
   */
  plus(other: Vec2): Vec2;
  /**
   * @param {Vec2} other
   * @returns {Vec2}
   */
  minus(other: Vec2): Vec2;
  /**
   * @param {number} by
   * @returns {Vec2}
   */
  scale(by: number): Vec2;
  /**
   * @param {Vec2} other
   * @returns {number}
   */
  distance_to(other: Vec2): number;
  /**
   * @returns {number}
   */
  magnitude(): number;
  /**
   * @param {number} n
   * @returns {Vec2}
   */
  divide_by(n: number): Vec2;
  /**
   * @returns {Vec2}
   */
  normalize(): Vec2;
  /**
   * @param {Vec2} towards
   * @param {number} amount
   * @returns {Vec2}
   */
  lerp(towards: Vec2, amount: number): Vec2;
  /**
   * @param {number} max
   * @returns {Vec2}
   */
  limit(max: number): Vec2;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_vec2_free: (a: number, b: number) => void;
  readonly vec2_new: (a: number, b: number) => number;
  readonly vec2_plus: (a: number, b: number) => number;
  readonly vec2_minus: (a: number, b: number) => number;
  readonly vec2_scale: (a: number, b: number) => number;
  readonly vec2_distance_to: (a: number, b: number) => number;
  readonly vec2_magnitude: (a: number) => number;
  readonly vec2_divide_by: (a: number, b: number) => number;
  readonly vec2_normalize: (a: number) => number;
  readonly vec2_lerp: (a: number, b: number, c: number) => number;
  readonly vec2_limit: (a: number, b: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;

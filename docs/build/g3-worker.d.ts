/// <reference path="../../worker/compiler/typescriptServices.d.ts" />
/// <reference lib="es2020" />
declare const API: typeof globalThis;
declare namespace Internal {
    type PropertiesMap = {
        [K in keyof typeof globalThis]?: PropertyDescriptor;
    } & ThisType<any>;
    function defineInternalMethods(funcs: Partial<typeof Internal>): void;
    function definePublicMethods(funcs: Partial<typeof globalThis>): void;
    function definePublicProperties(props: PropertiesMap): void;
    function EvluateAsPublic(code: string): any;
}
declare namespace Internal { }
declare namespace glMatrix {
    function equals(a: number, b: number): boolean;
}
interface Number {
    readonly length: 1;
}
interface Boolean {
    readonly length: 1;
}
declare type LVecN = LVec2<number> | LVec3<number> | LVec4<number>;
declare type LVecB = LVec2<boolean> | LVec3<boolean> | LVec4<boolean>;
declare const PI = 3.141592653589793;
declare const EPSILON = 0.000001;
declare function radians(degrees: number): number;
interface vec2 extends Float32Array {
}
declare type LVec2<C = number> = vec2 | [C, C];
declare function vec2(): LVec2;
declare function vec2(x: number, y: number): LVec2;
declare namespace vec2 {
    function create(): LVec2;
    function clone(a: LVec2): LVec2;
    function fromValues(x: number, y: number): LVec2;
    function copy(out: LVec2, a: LVec2): LVec2;
    function set(out: LVec2, x: number, y: number): LVec2;
    function add(out: LVec2, a: LVec2, b: LVec2): LVec2;
    function subtract(out: LVec2, a: LVec2, b: LVec2): LVec2;
    function multiply(out: LVec2, a: LVec2, b: LVec2): LVec2;
    function divide(out: LVec2, a: LVec2, b: LVec2): LVec2;
    function ceil(out: LVec2, a: LVec2): LVec2;
    function floor(out: LVec2, a: LVec2): LVec2;
    function min(out: LVec2, a: LVec2, b: LVec2): LVec2;
    function max(out: LVec2, a: LVec2, b: LVec2): LVec2;
    function round(out: LVec2, a: LVec2): LVec2;
    function scale(out: LVec2, a: LVec2, b: number): LVec2;
    function scaleAndAdd(out: LVec2, a: LVec2, b: LVec2, scale: number): LVec2;
    function distance(a: LVec2, b: LVec2): number;
    function squaredDistance(a: LVec2, b: LVec2): number;
    function _length(a: LVec2): number;
    function squaredLength(a: LVec2): number;
    function negate(out: LVec2, a: LVec2): LVec2;
    function inverse(out: LVec2, a: LVec2): LVec2;
    function normalize(out: LVec2, a: LVec2): LVec2;
    function dot(a: LVec2, b: LVec2): number;
    function cross(out: vec3, a: LVec2, b: LVec2): vec3;
    function lerp(out: LVec2, a: LVec2, b: LVec2, t: number): LVec2;
    function random(out: LVec2, scale: number): LVec2;
    function transformMat2(out: LVec2, a: LVec2, m: mat2): LVec2;
    function transformMat2d(out: LVec2, a: LVec2, m: mat2d): LVec2;
    function transformMat3(out: LVec2, a: LVec2, m: mat3): LVec2;
    function transformMat4(out: LVec2, a: LVec2, m: mat4): LVec2;
    function rotate(out: LVec2, a: LVec2, b: LVec2, c: number): LVec2;
    function angle(a: LVec2, b: LVec2): number;
    function zero(out: LVec2): LVec2;
    function str(a: LVec2): string;
    function exactEquals(a: LVec2, b: LVec2): boolean;
    function equals(a: LVec2, b: LVec2): boolean;
    const len: typeof _length;
    const sub: typeof subtract;
    const mul: typeof multiply;
    const div: typeof divide;
    const dist: typeof distance;
    const sqrDist: typeof squaredDistance;
    const sqrLen: typeof squaredLength;
    const forEach: (a: LVec2<number>, stride: number, offset: number, count: number, fn: (thisArg: LVec2<number>, vec: LVec2<number>, arg: any) => void, arg: any) => LVec2<number>;
}
interface vec3 extends Float32Array {
}
declare type LVec3<C = number> = vec3 | [C, C, C];
declare function vec3(): vec3;
declare function vec3(values: [number, number, number]): vec3;
declare function vec3(x: number, y: number, z: number): vec3;
declare namespace vec3 {
    function create(): LVec3;
    function clone(a: LVec3): LVec3;
    function _length(a: LVec3): number;
    function fromValues(x: number, y: number, z: number): LVec3;
    function copy(out: LVec3, a: LVec3): LVec3;
    function set(out: LVec3, x: number, y: number, z: number): LVec3;
    function add(out: LVec3, a: LVec3, b: LVec3): LVec3;
    function subtract(out: LVec3, a: LVec3, b: LVec3): LVec3;
    function multiply(out: LVec3, a: LVec3, b: LVec3): LVec3;
    function divide(out: LVec3, a: LVec3, b: LVec3): LVec3;
    function ceil(out: LVec3, a: LVec3): LVec3;
    function floor(out: LVec3, a: LVec3): LVec3;
    function min(out: LVec3, a: LVec3, b: LVec3): LVec3;
    function max(out: LVec3, a: LVec3, b: LVec3): LVec3;
    function round(out: LVec3, a: LVec3): LVec3;
    function scale(out: LVec3, a: LVec3, b: number): LVec3;
    function scaleAndAdd(out: LVec3, a: LVec3, b: LVec3, scale: number): LVec3;
    function distance(a: LVec3, b: LVec3): number;
    function squaredDistance(a: LVec3, b: LVec3): number;
    function squaredLength(a: LVec3): number;
    function negate(out: LVec3, a: LVec3): LVec3;
    function inverse(out: LVec3, a: LVec3): LVec3;
    function normalize(out: LVec3, a: LVec3): LVec3;
    function dot(a: LVec3, b: LVec3): number;
    function cross(out: LVec3, a: LVec3, b: LVec3): LVec3;
    function lerp(out: LVec3, a: LVec3, b: LVec3, t: number): LVec3;
    function hermite(out: LVec3, a: LVec3, b: LVec3, c: LVec3, d: LVec3, t: number): LVec3;
    function bezier(out: LVec3, a: LVec3, b: LVec3, c: LVec3, d: LVec3, t: number): LVec3;
    function random(out: LVec3, scale: number): LVec3;
    function transformMat4(out: LVec3, a: LVec3, m: mat4): LVec3;
    function transformMat3(out: LVec3, a: LVec3, m: mat3): LVec3;
    function transformQuat(out: LVec3, a: LVec3, q: quat): LVec3;
    function rotateX(out: LVec3, a: LVec3, b: LVec3, c: number): LVec3;
    function rotateY(out: LVec3, a: LVec3, b: LVec3, c: number): LVec3;
    function rotateZ(out: LVec3, a: LVec3, b: LVec3, c: number): LVec3;
    function angle(a: LVec3, b: LVec3): number;
    function zero(out: LVec3): LVec3;
    function str(a: LVec3): string;
    function exactEquals(a: LVec3, b: LVec3): boolean;
    function equals(a: LVec3, b: LVec3): boolean;
    const sub: typeof subtract;
    const mul: typeof multiply;
    const div: typeof divide;
    const dist: typeof distance;
    const sqrDist: typeof squaredDistance;
    const len: typeof _length;
    const sqrLen: typeof squaredLength;
    const forEach: (a: LVec3<number>, stride: number, offset: number, count: number, fn: (thisArg: LVec3<number>, vec: LVec3<number>, arg: any) => void, arg: any) => LVec3<number>;
}
declare type LVec4<C = number> = vec4 | [C, C, C, C];
interface vec4 extends Float32Array {
}
declare function vec4(): vec4;
declare function vec4(x: number, y: number, z: number, w: number): vec4;
declare namespace vec4 {
    function create(): LVec4;
    function clone(a: LVec4): LVec4;
    function fromValues(x: number, y: number, z: number, w: number): LVec4;
    function copy(out: LVec4, a: LVec4): LVec4;
    function set(out: LVec4, x: number, y: number, z: number, w: number): LVec4;
    function add(out: LVec4, a: LVec4, b: LVec4): LVec4;
    function subtract(out: LVec4, a: LVec4, b: LVec4): LVec4;
    function multiply(out: LVec4, a: LVec4, b: LVec4): LVec4;
    function divide(out: LVec4, a: LVec4, b: LVec4): LVec4;
    function ceil(out: LVec4, a: LVec4): LVec4;
    function floor(out: LVec4, a: LVec4): LVec4;
    function min(out: LVec4, a: LVec4, b: LVec4): LVec4;
    function max(out: LVec4, a: LVec4, b: LVec4): LVec4;
    function round(out: LVec4, a: LVec4): LVec4;
    function scale(out: LVec4, a: LVec4, b: number): LVec4;
    function scaleAndAdd(out: LVec4, a: LVec4, b: LVec4, scale: number): LVec4;
    function distance(a: LVec4, b: LVec4): number;
    function squaredDistance(a: LVec4, b: LVec4): number;
    function _length(a: LVec4): number;
    function squaredLength(a: LVec4): number;
    function negate(out: LVec4, a: LVec4): LVec4;
    function inverse(out: LVec4, a: LVec4): LVec4;
    function normalize(out: LVec4, a: LVec4): LVec4;
    function dot(a: LVec4, b: LVec4): number;
    function cross(out: LVec4, u: LVec4, v: LVec4, w: LVec4): LVec4;
    function lerp(out: LVec4, a: LVec4, b: LVec4, t: number): LVec4;
    function random(out: LVec4, scale: number): LVec4;
    function transformMat4(out: LVec4, a: LVec4, m: mat4): LVec4;
    function transformQuat(out: LVec4, a: LVec4, q: quat): LVec4;
    function zero(out: LVec4): LVec4;
    function str(a: LVec4): string;
    function exactEquals(a: LVec4, b: LVec4): boolean;
    function equals(a: LVec4, b: LVec4): boolean;
    const sub: typeof subtract;
    const mul: typeof multiply;
    const div: typeof divide;
    const dist: typeof distance;
    const sqrDist: typeof squaredDistance;
    const len: typeof _length;
    const sqrLen: typeof squaredLength;
    const forEach: (a: LVec4<number>, stride: number, offset: number, count: number, fn: (argThis: LVec4<number>, vec: LVec4<number>, arg: any) => void, arg: any) => LVec4<number>;
}
interface mat2 extends Float32Array {
}
declare function mat2(): mat2;
declare function mat2(m00: number, m01: number, m10: number, m11: number): mat2;
declare namespace lat2 {
    function create(): mat2;
    function clone(a: mat2): mat2;
    function copy(out: mat2, a: mat2): mat2;
    function identity(out: mat2): mat2;
    function fromValues(m00: number, m01: number, m10: number, m11: number): mat2;
    function set(out: mat2, m00: number, m01: number, m10: number, m11: number): mat2;
    function transpose(out: mat2, a: mat2): mat2;
    function invert(out: mat2, a: mat2): mat2 | null;
    function adjoint(out: mat2, a: mat2): mat2;
    function determinant(a: mat2): number;
    function multiply(out: mat2, a: mat2, b: mat2): mat2;
    function rotate(out: mat2, a: mat2, rad: number): mat2;
    function scale(out: mat2, a: mat2, v: vec2): mat2;
    function fromRotation(out: mat2, rad: number): mat2;
    function fromScaling(out: mat2, v: vec2): mat2;
    function str(a: mat2): string;
    function frob(a: mat2): number;
    function LDU(L: mat2, D: mat2, U: mat2, a: mat2): mat2[];
    function add(out: mat2, a: mat2, b: mat2): mat2;
    function subtract(out: mat2, a: mat2, b: mat2): mat2;
    function exactEquals(a: mat2, b: mat2): boolean;
    function equals(a: mat2, b: mat2): boolean;
    function multiplyScalar(out: mat2, a: mat2, b: number): mat2;
    function multiplyScalarAndAdd(out: mat2, a: mat2, b: mat2, scale: number): mat2;
    const mul: typeof multiply;
    const sub: typeof subtract;
}
interface mat2d extends Float32Array {
}
declare function mat2d(): mat2d;
declare function mat2d(a: number, b: number, c: number, d: number, tx: number, ty: number): mat2d;
declare namespace mat2d {
    function create(): mat2d;
    function clone(a: mat2d): mat2d;
    function copy(out: mat2d, a: mat2d): mat2d;
    function identity(out: mat2d): mat2d;
    function fromValues(a: number, b: number, c: number, d: number, tx: number, ty: number): mat2d;
    function set(out: mat2d, a: number, b: number, c: number, d: number, tx: number, ty: number): mat2d;
    function invert(out: mat2d, a: mat2d): mat2d | null;
    function determinant(a: mat2d): number;
    function multiply(out: mat2d, a: mat2d, b: mat2d): mat2d;
    function rotate(out: mat2d, a: mat2d, rad: number): mat2d;
    function scale(out: mat2d, a: mat2d, v: vec2): mat2d;
    function translate(out: mat2d, a: mat2d, v: vec2): mat2d;
    function fromRotation(out: mat2d, rad: number): mat2d;
    function fromScaling(out: mat2d, v: vec2): mat2d;
    function fromTranslation(out: mat2d, v: vec2): mat2d;
    function str(a: mat2d): string;
    function frob(a: mat2d): number;
    function add(out: mat2d, a: mat2d, b: mat2d): mat2d;
    function subtract(out: mat2d, a: mat2d, b: mat2d): mat2d;
    function multiplyScalar(out: mat2d, a: mat2d, b: number): mat2d;
    function multiplyScalarAndAdd(out: mat2d, a: mat2d, b: mat2d, scale: number): mat2d;
    function exactEquals(a: mat2d, b: mat2d): boolean;
    function equals(a: mat2d, b: mat2d): boolean;
    const mul: typeof multiply;
    const sub: typeof subtract;
}
interface mat3 extends Float32Array {
}
declare function mat3(): mat3;
declare function mat3(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): mat3;
declare namespace mat3 {
    function create(): mat3;
    function fromMat4(out: mat3, a: mat4): mat3;
    function clone(a: mat3): mat3;
    function copy(out: mat3, a: mat3): mat3;
    function fromValues(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): mat3;
    function set(out: mat3, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): mat3;
    function identity(out: mat3): mat3;
    function transpose(out: mat3, a: mat3): mat3;
    function invert(out: mat3, a: mat3): mat3 | null;
    function adjoint(out: mat3, a: mat3): mat3;
    function determinant(a: mat3): number;
    function multiply(out: mat3, a: mat3, b: mat3): mat3;
    function translate(out: mat3, a: mat3, v: vec2): mat3;
    function rotate(out: mat3, a: mat3, rad: number): mat3;
    function scale(out: mat3, a: mat3, v: vec2): mat3;
    function fromTranslation(out: mat3, v: vec2): mat3;
    function fromRotation(out: mat3, rad: number): mat3;
    function fromScaling(out: mat3, v: vec2): mat3;
    function fromMat2d(out: mat3, a: mat2d): mat3;
    function fromQuat(out: mat3, q: quat): mat3;
    function normalFromMat4(out: mat3, a: mat4): mat3 | null;
    function projection(out: mat3, width: number, height: number): mat3;
    function str(a: mat3): string;
    function frob(a: mat3): number;
    function add(out: mat3, a: mat3, b: mat3): mat3;
    function subtract(out: mat3, a: mat3, b: mat3): mat3;
    function multiplyScalar(out: mat3, a: mat3, b: number): mat3;
    function multiplyScalarAndAdd(out: mat3, a: mat3, b: mat3, scale: number): mat3;
    function exactEquals(a: mat3, b: mat3): boolean;
    function equals(a: mat3, b: mat3): boolean;
    const mul: typeof multiply;
    const sub: typeof subtract;
}
interface mat4 extends Float32Array {
}
declare function mat4(): mat4;
declare function mat4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): mat4;
declare namespace mat4 {
    type TVec3 = vec3 | [number, number, number];
    function create(): mat4;
    function clone(a: mat4): mat4;
    function copy(out: mat4, a: mat4): mat4;
    function fromValues(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): mat4;
    function set(out: mat4, m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): mat4;
    function identity(out: mat4): mat4;
    function transpose(out: mat4, a: mat4): mat4;
    function invert(out: mat4, a: mat4): mat4 | null;
    function adjoint(out: mat4, a: mat4): mat4;
    function determinant(a: mat4): number;
    function multiply(out: mat4, a: mat4, b: mat4): mat4;
    function translate(out: mat4, a: mat4, v: TVec3): mat4;
    function scale(out: mat4, a: mat4, v: TVec3): mat4;
    function rotate(out: mat4, a: mat4, rad: number, axis: TVec3): mat4 | null;
    function rotateX(out: mat4, a: mat4, rad: number): mat4;
    function rotateY(out: mat4, a: mat4, rad: number): mat4;
    function rotateZ(out: mat4, a: mat4, rad: number): mat4;
    function fromTranslation(out: mat4, v: vec3): mat4;
    function fromScaling(out: mat4, v: vec3): mat4;
    function fromRotation(out: mat4, rad: number, axis: vec3): mat4 | null;
    function fromXRotation(out: mat4, rad: number): mat4;
    function fromYRotation(out: mat4, rad: number): mat4;
    function fromZRotation(out: mat4, rad: number): mat4;
    function fromRotationTranslation(out: mat4, q: quat, v: vec3): mat4;
    function fromQuat2(out: mat4, a: quat2): mat4;
    function getTranslation(out: vec3, mat: mat4): vec3;
    function getScaling(out: vec3, mat: mat4): vec3;
    function getRotation(out: LQuat, mat: mat4): LQuat;
    function fromRotationTranslationScale(out: mat4, q: LQuat, v: vec3, s: vec3): mat4;
    function fromRotationTranslationScaleOrigin(out: mat4, q: quat, v: vec3, s: vec3, o: vec3): mat4;
    function fromQuat(out: mat4, q: quat): mat4;
    function frustum(out: mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): mat4;
    function perspective(out: mat4, fovy: number, aspect: number, near: number, far: number): mat4;
    type FovObject = {
        upDegrees: number;
        downDegrees: number;
        leftDegrees: number;
        rightDegrees: number;
    };
    function perspectiveFromFieldOfView(out: mat4, fov: FovObject, near: number, far: number): mat4;
    function ortho(out: mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): mat4;
    function lookAt(out: mat4, eye: vec3, center: vec3, up: vec3): mat4;
    function targetTo(out: mat4, eye: vec3, target: LVec3, up: vec3): mat4;
    function str(a: mat4): string;
    function frob(a: mat4): number;
    function add(out: mat4, a: mat4, b: mat4): mat4;
    function subtract(out: mat4, a: mat4, b: mat4): mat4;
    function multiplyScalar(out: mat4, a: mat4, b: number): mat4;
    function multiplyScalarAndAdd(out: mat4, a: mat4, b: mat4, scale: number): mat4;
    function exactEquals(a: mat4, b: mat4): boolean;
    function equals(a: mat4, b: mat4): boolean;
    const mul: typeof multiply;
    const sub: typeof subtract;
}
declare type LQuat = quat | [number, number, number, number];
interface quat extends Float32Array {
}
declare function quat(): quat;
declare namespace quat {
    function create(): LQuat;
    function identity(out: LQuat): LQuat;
    function setAxisAngle(out: LQuat, axis: LVec3, rad: number): LQuat;
    function getAxisAngle(out_axis: vec3, q: LQuat): number;
    function multiply(out: LQuat, a: LQuat, b: LQuat): LQuat;
    function rotateX(out: LQuat, a: LQuat, rad: number): LQuat;
    function rotateY(out: LQuat, a: LQuat, rad: number): LQuat;
    function rotateZ(out: LQuat, a: LQuat, rad: number): LQuat;
    function calculateW(out: LQuat, a: LQuat): LQuat;
    function slerp(out: LQuat, a: LQuat, b: LQuat, t: number): LQuat;
    function random(out: LQuat): LQuat;
    function invert(out: LQuat, a: LQuat): LQuat;
    function conjugate(out: LQuat, a: LQuat): LQuat;
    function fromMat3(out: LQuat, m: mat3): LQuat;
    function fromEuler(out: LQuat, x: number, y: number, z: number): LQuat;
    function str(a: LQuat): string;
    const clone: typeof vec4.clone;
    const fromValues: typeof vec4.fromValues;
    const copy: typeof vec4.copy;
    const set: typeof vec4.set;
    const add: typeof vec4.add;
    const mul: typeof multiply;
    const scale: typeof vec4.scale;
    const dot: typeof vec4.dot;
    const lerp: typeof vec4.lerp;
    const _length: typeof vec4._length;
    const len: typeof vec4._length;
    const squaredLength: typeof vec4.squaredLength;
    const sqrLen: typeof vec4.squaredLength;
    const normalize: typeof vec4.normalize;
    const exactEquals: typeof vec4.exactEquals;
    const equals: typeof vec4.equals;
    const rotationTo: (out: LQuat, a: LVec3<number>, b: LVec3<number>) => LVec4<number>;
    const sqlerp: (out: LQuat, a: LQuat, b: LQuat, c: LQuat, d: LQuat, t: number) => LQuat;
    const setAxes: (out: LQuat, view: LVec4<number>, right: LVec4<number>, up: LVec4<number>) => LQuat;
}
declare type LQuat2 = quat2 | [number, number, number, number, number, number, number, number];
interface quat2 extends Float32Array {
}
declare function quat2(): quat2;
declare function quat2(x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number, w2: number): quat2;
declare namespace quat2 {
    function create(): quat2;
    function clone(a: quat2): quat2;
    function fromValues(x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number, w2: number): quat2;
    function fromRotationTranslationValues(x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number): quat2;
    function fromRotationTranslation(out: quat2, q: LQuat, t: vec3): quat2;
    function fromTranslation(out: quat2, t: vec3): quat2;
    function fromRotation(out: quat2, q: quat): quat2;
    function fromMat4(out: quat2, a: mat4): quat2;
    function copy(out: quat2, a: quat2): quat2;
    function identity(out: quat2): quat2;
    function set(out: quat2, x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number, w2: number): quat2;
    const getReal: typeof vec4.copy;
    function getDual(out: quat, a: quat2): quat;
    const setReal: typeof vec4.copy;
    function setDual(out: quat2, q: quat): quat2;
    function getTranslation(out: vec3, a: quat2): vec3;
    function translate(out: quat2, a: quat2, v: vec3): quat2;
    function rotateX(out: quat2, a: quat2, rad: number): quat2;
    function rotateY(out: quat2, a: quat2, rad: number): quat2;
    function rotateZ(out: quat2, a: quat2, rad: number): quat2;
    function rotateByQuatAppend(out: quat2, a: quat2, q: quat): quat2;
    function rotateByQuatPrepend(out: quat2, q: quat, a: quat2): quat2;
    function rotateAroundAxis(out: quat2, a: quat2, axis: vec3, rad: number): quat2;
    function add(out: quat2, a: quat2, b: quat2): quat2;
    function multiply(out: quat2, a: quat2, b: quat2): quat2;
    const mul: typeof multiply;
    function scale(out: quat2, a: quat2, b: number): quat2;
    const dot: typeof vec4.dot;
    function lerp(out: quat2, a: quat2, b: quat2, t: number): quat2;
    function invert(out: quat2, a: quat2): quat2;
    function conjugate(out: quat2, a: quat2): quat2;
    const _length: typeof vec4._length;
    const len: typeof vec4._length;
    const squaredLength: typeof vec4.squaredLength;
    const sqrLen: typeof vec4.squaredLength;
    function normalize(out: quat2, a: quat2): quat2;
    function str(a: quat2): string;
    function exactEquals(a: quat2, b: quat2): boolean;
    function equals(a: quat2, b: quat2): boolean;
}
declare function lerp<T extends LVec2 | LVec3 | LVec4>(vin: T, vout: T, v: number): T;
declare function remap(vin: LVec2, vout: LVec2, v: number): number;
declare function len(a: LVec2 | LVec3 | LVec4): number;
declare function distance<T extends LVec2 | LVec3 | LVec4>(a: T, b: T): number;
declare function dot<T extends LVec2 | LVec3 | LVec4>(a: T, b: T): number;
declare function cross(a: LVec3, b: LVec3): LVec3;
declare function normalize<T extends LVec2 | LVec3 | LVec4>(a: T): T;
declare function sin<T extends number | LVecN>(radian: T): T;
declare function cos<T extends number | LVecN>(radian: T): T;
declare function tan<T extends number | LVecN>(radian: T): T;
declare function asin<T extends number | LVecN>(radian: T): T;
declare function acos<T extends number | LVecN>(radian: T): T;
declare function atan<T extends number | LVecN>(radian: T): T;
declare function sinh<T extends number>(radian: T): T;
declare function sinh<T extends LVecN>(radian: T): T;
declare function cosh<T extends number>(radian: T): T;
declare function cosh<T extends LVecN>(radian: T): T;
declare function tanh<T extends number>(radian: T): T;
declare function tanh<T extends LVecN>(radian: T): T;
declare function asinh<T extends number>(radian: T): T;
declare function asinh<T extends LVecN>(radian: T): T;
declare function acosh<T extends number>(radian: T): T;
declare function acosh<T extends LVecN>(radian: T): T;
declare function atanh<T extends number>(radian: T): T;
declare function atanh<T extends LVecN>(radian: T): T;
declare function pow<T extends number>(n1: T, n2: T): T;
declare function pow<T extends LVecN>(n1: T, n2: T): T;
declare function exp<T extends number>(n: T): T;
declare function exp<T extends LVecN>(n: T): T;
declare function log<T extends number>(n: T): T;
declare function log<T extends LVecN>(n: T): T;
declare function exp2<T extends number>(n: T): T;
declare function exp2<T extends LVecN>(n: T): T;
declare function log2<T extends number>(n: T): T;
declare function log2<T extends LVecN>(n: T): T;
declare function sqrt<T extends number>(n: T): T;
declare function sqrt<T extends LVecN>(n: T): T;
declare function abs<T extends number | LVecN>(n: T): T;
declare function sign<T extends number | LVecN>(n: T): T;
declare function floor<T extends number | LVecN>(n: T): T;
declare function trunc<T extends number | LVecN>(n: T): T;
declare function round<T extends number | LVecN>(n: T): T;
declare function ceil<T extends number | LVecN>(n: T): T;
declare function fract<T extends number | LVecN>(n: T): T;
declare function mod<T extends number | LVecN>(n1: T, n2: T): T;
declare function min<T extends number | LVecN>(n1: T, n2: T): T;
declare function max<T extends number | LVecN>(n1: T, n2: T): T;
declare function clamp<T extends number | LVecN>(n1: T, n2: T, a: T): T;
declare function step<T extends number | LVecN>(n1: T, n2: T): T;
declare function isnan<T extends number | LVecN>(n: T): boolean | LVecB;
declare function isinf<T extends number | LVecN>(n: T): boolean | LVecB;
declare const GS_EVENT_TYPE = "G3_EVENT_TYPE";
declare namespace g3 {
    interface Message {
        [GS_EVENT_TYPE]: number;
    }
}
declare const G3_INIT_EVENT: 1;
declare const G3_RESIZE_EVENT: 2;
declare const G3_POINTER_EVENT: 3;
declare const G3_POINTER_MOVE_EVENT: 4;
declare const G3_BUTTON_DOWN_EVENT: 5;
declare const G3_BUTTON_UP_EVENT: 6;
declare const G3_WHEEL_EVENT: 7;
declare const G3_KEYBOARD_EVENT: 8;
declare const G3_KEY_DOWN_EVENT: 9;
declare const G3_KEY_UP_EVENT: 10;
declare namespace g3 {
    interface ClientMessages {
        [G3_INIT_EVENT]: InitMessage;
        [G3_RESIZE_EVENT]: ResizeMessage;
        [G3_POINTER_MOVE_EVENT]: PointerMoveMessage;
        [G3_BUTTON_DOWN_EVENT]: ButtonDownMessage;
        [G3_BUTTON_UP_EVENT]: ButtonUpMessage;
        [G3_WHEEL_EVENT]: WheelMessage;
        [G3_KEY_DOWN_EVENT]: KeyDownMessage;
        [G3_KEY_UP_EVENT]: KeyUpMessage;
    }
    interface InitMessage extends Message {
        [GS_EVENT_TYPE]: typeof G3_INIT_EVENT;
        canvas: OffscreenCanvas;
        sketch: string;
        baseUri: string;
        libDirectory: string;
    }
    interface ResizeMessage extends Message {
        [GS_EVENT_TYPE]: typeof G3_RESIZE_EVENT;
        Width: number;
        Height: number;
    }
    interface PointerMessage extends Message {
        PointerLocation: [number, number];
        PointerMovement: [number, number];
        Force: number;
    }
    interface PointerMoveMessage extends PointerMessage {
        [GS_EVENT_TYPE]: typeof G3_POINTER_MOVE_EVENT;
    }
    interface ButtonMessage extends Message {
        Button: number;
    }
    interface ButtonDownMessage extends ButtonMessage {
        [GS_EVENT_TYPE]: typeof G3_BUTTON_DOWN_EVENT;
    }
    interface ButtonUpMessage extends ButtonMessage {
        [GS_EVENT_TYPE]: typeof G3_BUTTON_UP_EVENT;
    }
    interface WheelMessage {
        WheelDelta: number;
        WheelMode: number;
    }
    interface DragMessage {
        Location2D: [number, number];
        Movement2D: [number, number];
        Displacement2D: [number, number];
    }
    interface KeyboardMessage {
        Key: string;
        KeyCode: number;
    }
    interface KeyDownMessage extends KeyboardMessage {
        [GS_EVENT_TYPE]: typeof G3_KEY_DOWN_EVENT;
    }
    interface KeyUpMessage extends KeyboardMessage {
        [GS_EVENT_TYPE]: typeof G3_KEY_UP_EVENT;
    }
}
declare const G3_NEED_FULL_SCREEN: 1;
declare const G3_NEED_SQAURE_VIEW: 2;
declare namespace g3 {
    interface WorkerEvents {
        [G3_NEED_FULL_SCREEN]: FullScreenMessage;
        [G3_NEED_SQAURE_VIEW]: SquareViewMessage;
    }
    interface FullScreenMessage extends Message {
        [GS_EVENT_TYPE]: typeof G3_NEED_FULL_SCREEN;
    }
    interface SquareViewMessage extends Message {
        [GS_EVENT_TYPE]: typeof G3_NEED_SQAURE_VIEW;
    }
}
declare const ALL_CALLBACKS = "*";
declare namespace Internal {
    type EventNames = "*" | "error" | "resource-loaded";
    type AnyCallbacks = (...args: any[]) => void;
    function on(event: EventNames, fn: AnyCallbacks): void;
    function once(event: EventNames, fn: AnyCallbacks): void;
    function off(event: EventNames, fn: AnyCallbacks): void;
    function dispatch(event: EventNames, ...args: any): void;
}
declare const DEPTH_BUFFER_BIT = 256;
declare const STENCIL_BUFFER_BIT = 1024;
declare const COLOR_BUFFER_BIT = 16384;
declare const POINTS = 0;
declare const LINES = 1;
declare const LINE_LOOP = 2;
declare const LINE_STRIP = 3;
declare const TRIANGLES = 4;
declare const TRIANGLE_STRIP = 5;
declare const TRIANGLE_FAN = 6;
declare const ZERO = 0;
declare const ONE = 1;
declare const SRC_COLOR = 768;
declare const ONE_MINUS_SRC_COLOR = 769;
declare const SRC_ALPHA = 770;
declare const ONE_MINUS_SRC_ALPHA = 771;
declare const DST_ALPHA = 772;
declare const ONE_MINUS_DST_ALPHA = 773;
declare const DST_COLOR = 774;
declare const ONE_MINUS_DST_COLOR = 775;
declare const SRC_ALPHA_SATURATE = 776;
declare const FUNC_ADD = 32774;
declare const BLEND_EQUATION = 32777;
declare const BLEND_EQUATION_RGB = 32777;
declare const BLEND_EQUATION_ALPHA = 34877;
declare const FUNC_SUBTRACT = 32778;
declare const FUNC_REVERSE_SUBTRACT = 32779;
declare const BLEND_DST_RGB = 32968;
declare const BLEND_SRC_RGB = 32969;
declare const BLEND_DST_ALPHA = 32970;
declare const BLEND_SRC_ALPHA = 32971;
declare const CONSTANT_COLOR = 32769;
declare const ONE_MINUS_CONSTANT_COLOR = 32770;
declare const CONSTANT_ALPHA = 32771;
declare const ONE_MINUS_CONSTANT_ALPHA = 32772;
declare const BLEND_COLOR = 32773;
declare const ARRAY_BUFFER = 34962;
declare const ELEMENT_ARRAY_BUFFER = 34963;
declare const ARRAY_BUFFER_BINDING = 34964;
declare const ELEMENT_ARRAY_BUFFER_BINDING = 34965;
declare const STREAM_DRAW = 35040;
declare const STATIC_DRAW = 35044;
declare const DYNAMIC_DRAW = 35048;
declare const BUFFER_SIZE = 34660;
declare const BUFFER_USAGE = 34661;
declare const CURRENT_VERTEX_ATTRIB = 34342;
declare const FRONT = 1028;
declare const BACK = 1029;
declare const FRONT_AND_BACK = 1032;
declare const CULL_FACE = 2884;
declare const BLEND = 3042;
declare const DITHER = 3024;
declare const STENCIL_TEST = 2960;
declare const DEPTH_TEST = 2929;
declare const SCISSOR_TEST = 3089;
declare const POLYGON_OFFSET_FILL = 32823;
declare const SAMPLE_ALPHA_TO_COVERAGE = 32926;
declare const SAMPLE_COVERAGE = 32928;
declare const NO_ERROR = 0;
declare const INVALID_ENUM = 1280;
declare const INVALID_VALUE = 1281;
declare const INVALID_OPERATION = 1282;
declare const OUT_OF_MEMORY = 1285;
declare const CW = 2304;
declare const CCW = 2305;
declare const LINE_WIDTH = 2849;
declare const ALIASED_POINT_SIZE_RANGE = 33901;
declare const ALIASED_LINE_WIDTH_RANGE = 33902;
declare const CULL_FACE_MODE = 2885;
declare const FRONT_FACE = 2886;
declare const DEPTH_RANGE = 2928;
declare const DEPTH_WRITEMASK = 2930;
declare const DEPTH_CLEAR_VALUE = 2931;
declare const DEPTH_FUNC = 2932;
declare const STENCIL_CLEAR_VALUE = 2961;
declare const STENCIL_FUNC = 2962;
declare const STENCIL_FAIL = 2964;
declare const STENCIL_PASS_DEPTH_FAIL = 2965;
declare const STENCIL_PASS_DEPTH_PASS = 2966;
declare const STENCIL_REF = 2967;
declare const STENCIL_VALUE_MASK = 2963;
declare const STENCIL_WRITEMASK = 2968;
declare const STENCIL_BACK_FUNC = 34816;
declare const STENCIL_BACK_FAIL = 34817;
declare const STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
declare const STENCIL_BACK_PASS_DEPTH_PASS = 34819;
declare const STENCIL_BACK_REF = 36003;
declare const STENCIL_BACK_VALUE_MASK = 36004;
declare const STENCIL_BACK_WRITEMASK = 36005;
declare const VIEWPORT = 2978;
declare const SCISSOR_BOX = 3088;
declare const COLOR_CLEAR_VALUE = 3106;
declare const COLOR_WRITEMASK = 3107;
declare const UNPACK_ALIGNMENT = 3317;
declare const PACK_ALIGNMENT = 3333;
declare const MAX_TEXTURE_SIZE = 3379;
declare const MAX_VIEWPORT_DIMS = 3386;
declare const SUBPIXEL_BITS = 3408;
declare const RED_BITS = 3410;
declare const GREEN_BITS = 3411;
declare const BLUE_BITS = 3412;
declare const ALPHA_BITS = 3413;
declare const DEPTH_BITS = 3414;
declare const STENCIL_BITS = 3415;
declare const POLYGON_OFFSET_UNITS = 10752;
declare const POLYGON_OFFSET_FACTOR = 32824;
declare const TEXTURE_BINDING_2D = 32873;
declare const SAMPLE_BUFFERS = 32936;
declare const SAMPLES = 32937;
declare const SAMPLE_COVERAGE_VALUE = 32938;
declare const SAMPLE_COVERAGE_INVERT = 32939;
declare const COMPRESSED_TEXTURE_FORMATS = 34467;
declare const DONT_CARE = 4352;
declare const FASTEST = 4353;
declare const NICEST = 4354;
declare const GENERATE_MIPMAP_HINT = 33170;
declare const BYTE = 5120;
declare const UNSIGNED_BYTE = 5121;
declare const SHORT = 5122;
declare const UNSIGNED_SHORT = 5123;
declare const INT = 5124;
declare const UNSIGNED_INT = 5125;
declare const FLOAT = 5126;
declare const DEPTH_COMPONENT = 6402;
declare const ALPHA = 6406;
declare const RGB = 6407;
declare const RGBA = 6408;
declare const LUMINANCE = 6409;
declare const LUMINANCE_ALPHA = 6410;
declare const UNSIGNED_SHORT_4_4_4_4 = 32819;
declare const UNSIGNED_SHORT_5_5_5_1 = 32820;
declare const UNSIGNED_SHORT_5_6_5 = 33635;
declare const FRAGMENT_SHADER = 35632;
declare const VERTEX_SHADER = 35633;
declare const MAX_VERTEX_ATTRIBS = 34921;
declare const MAX_VERTEX_UNIFORM_VECTORS = 36347;
declare const MAX_VARYING_VECTORS = 36348;
declare const MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
declare const MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
declare const MAX_TEXTURE_IMAGE_UNITS = 34930;
declare const MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
declare const SHADER_TYPE = 35663;
declare const DELETE_STATUS = 35712;
declare const LINK_STATUS = 35714;
declare const VALIDATE_STATUS = 35715;
declare const ATTACHED_SHADERS = 35717;
declare const ACTIVE_UNIFORMS = 35718;
declare const ACTIVE_ATTRIBUTES = 35721;
declare const SHADING_LANGUAGE_VERSION = 35724;
declare const CURRENT_PROGRAM = 35725;
declare const NEVER = 512;
declare const LESS = 513;
declare const EQUAL = 514;
declare const LEQUAL = 515;
declare const GREATER = 516;
declare const NOTEQUAL = 517;
declare const GEQUAL = 518;
declare const ALWAYS = 519;
declare const KEEP = 7680;
declare const REPLACE = 7681;
declare const INCR = 7682;
declare const DECR = 7683;
declare const INVERT = 5386;
declare const INCR_WRAP = 34055;
declare const DECR_WRAP = 34056;
declare const VENDOR = 7936;
declare const RENDERER = 7937;
declare const VERSION = 7938;
declare const NEAREST = 9728;
declare const LINEAR = 9729;
declare const NEAREST_MIPMAP_NEAREST = 9984;
declare const LINEAR_MIPMAP_NEAREST = 9985;
declare const NEAREST_MIPMAP_LINEAR = 9986;
declare const LINEAR_MIPMAP_LINEAR = 9987;
declare const TEXTURE_MAG_FILTER = 10240;
declare const TEXTURE_MIN_FILTER = 10241;
declare const TEXTURE_WRAP_S = 10242;
declare const TEXTURE_WRAP_T = 10243;
declare const TEXTURE_2D = 3553;
declare const TEXTURE = 5890;
declare const TEXTURE_CUBE_MAP = 34067;
declare const TEXTURE_BINDING_CUBE_MAP = 34068;
declare const TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
declare const TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
declare const TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
declare const TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
declare const TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
declare const TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
declare const MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
declare const TEXTURE0 = 33984;
declare const TEXTURE1 = 33985;
declare const TEXTURE2 = 33986;
declare const TEXTURE3 = 33987;
declare const TEXTURE4 = 33988;
declare const TEXTURE5 = 33989;
declare const TEXTURE6 = 33990;
declare const TEXTURE7 = 33991;
declare const TEXTURE8 = 33992;
declare const TEXTURE9 = 33993;
declare const TEXTURE10 = 33994;
declare const TEXTURE11 = 33995;
declare const TEXTURE12 = 33996;
declare const TEXTURE13 = 33997;
declare const TEXTURE14 = 33998;
declare const TEXTURE15 = 33999;
declare const TEXTURE16 = 34000;
declare const TEXTURE17 = 34001;
declare const TEXTURE18 = 34002;
declare const TEXTURE19 = 34003;
declare const TEXTURE20 = 34004;
declare const TEXTURE21 = 34005;
declare const TEXTURE22 = 34006;
declare const TEXTURE23 = 34007;
declare const TEXTURE24 = 34008;
declare const TEXTURE25 = 34009;
declare const TEXTURE26 = 34010;
declare const TEXTURE27 = 34011;
declare const TEXTURE28 = 34012;
declare const TEXTURE29 = 34013;
declare const TEXTURE30 = 34014;
declare const TEXTURE31 = 34015;
declare const ACTIVE_TEXTURE = 34016;
declare const REPEAT = 10497;
declare const CLAMP_TO_EDGE = 33071;
declare const MIRRORED_REPEAT = 33648;
declare const FLOAT_VEC2 = 35664;
declare const FLOAT_VEC3 = 35665;
declare const FLOAT_VEC4 = 35666;
declare const INT_VEC2 = 35667;
declare const INT_VEC3 = 35668;
declare const INT_VEC4 = 35669;
declare const BOOL = 35670;
declare const BOOL_VEC2 = 35671;
declare const BOOL_VEC3 = 35672;
declare const BOOL_VEC4 = 35673;
declare const FLOAT_MAT2 = 35674;
declare const FLOAT_MAT3 = 35675;
declare const FLOAT_MAT4 = 35676;
declare const SAMPLER_2D = 35678;
declare const SAMPLER_CUBE = 35680;
declare const VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
declare const VERTEX_ATTRIB_ARRAY_SIZE = 34339;
declare const VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
declare const VERTEX_ATTRIB_ARRAY_TYPE = 34341;
declare const VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
declare const VERTEX_ATTRIB_ARRAY_POINTER = 34373;
declare const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
declare const IMPLEMENTATION_COLOR_READ_TYPE = 35738;
declare const IMPLEMENTATION_COLOR_READ_FORMAT = 35739;
declare const COMPILE_STATUS = 35713;
declare const LOW_FLOAT = 36336;
declare const MEDIUM_FLOAT = 36337;
declare const HIGH_FLOAT = 36338;
declare const LOW_INT = 36339;
declare const MEDIUM_INT = 36340;
declare const HIGH_INT = 36341;
declare const FRAMEBUFFER = 36160;
declare const RENDERBUFFER = 36161;
declare const RGBA4 = 32854;
declare const RGB5_A1 = 32855;
declare const RGB565 = 36194;
declare const DEPTH_COMPONENT16 = 33189;
declare const STENCIL_INDEX8 = 36168;
declare const DEPTH_STENCIL = 34041;
declare const RENDERBUFFER_WIDTH = 36162;
declare const RENDERBUFFER_HEIGHT = 36163;
declare const RENDERBUFFER_INTERNAL_FORMAT = 36164;
declare const RENDERBUFFER_RED_SIZE = 36176;
declare const RENDERBUFFER_GREEN_SIZE = 36177;
declare const RENDERBUFFER_BLUE_SIZE = 36178;
declare const RENDERBUFFER_ALPHA_SIZE = 36179;
declare const RENDERBUFFER_DEPTH_SIZE = 36180;
declare const RENDERBUFFER_STENCIL_SIZE = 36181;
declare const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
declare const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
declare const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
declare const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
declare const COLOR_ATTACHMENT0 = 36064;
declare const DEPTH_ATTACHMENT = 36096;
declare const STENCIL_ATTACHMENT = 36128;
declare const DEPTH_STENCIL_ATTACHMENT = 33306;
declare const NONE = 0;
declare const FRAMEBUFFER_COMPLETE = 36053;
declare const FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
declare const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
declare const FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
declare const FRAMEBUFFER_UNSUPPORTED = 36061;
declare const FRAMEBUFFER_BINDING = 36006;
declare const RENDERBUFFER_BINDING = 36007;
declare const MAX_RENDERBUFFER_SIZE = 34024;
declare const INVALID_FRAMEBUFFER_OPERATION = 1286;
declare const UNPACK_FLIP_Y_WEBGL = 37440;
declare const UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
declare const CONTEXT_LOST_WEBGL = 37442;
declare const UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443;
declare const BROWSER_DEFAULT_WEBGL = 37444;
declare const READ_BUFFER = 3074;
declare const UNPACK_ROW_LENGTH = 3314;
declare const UNPACK_SKIP_ROWS = 3315;
declare const UNPACK_SKIP_PIXELS = 3316;
declare const PACK_ROW_LENGTH = 3330;
declare const PACK_SKIP_ROWS = 3331;
declare const PACK_SKIP_PIXELS = 3332;
declare const COLOR = 6144;
declare const DEPTH = 6145;
declare const STENCIL = 6146;
declare const RED = 6403;
declare const RGB8 = 32849;
declare const RGBA8 = 32856;
declare const RGB10_A2 = 32857;
declare const TEXTURE_BINDING_3D = 32874;
declare const UNPACK_SKIP_IMAGES = 32877;
declare const UNPACK_IMAGE_HEIGHT = 32878;
declare const TEXTURE_3D = 32879;
declare const TEXTURE_WRAP_R = 32882;
declare const MAX_3D_TEXTURE_SIZE = 32883;
declare const UNSIGNED_INT_2_10_10_10_REV = 33640;
declare const MAX_ELEMENTS_VERTICES = 33000;
declare const MAX_ELEMENTS_INDICES = 33001;
declare const TEXTURE_MIN_LOD = 33082;
declare const TEXTURE_MAX_LOD = 33083;
declare const TEXTURE_BASE_LEVEL = 33084;
declare const TEXTURE_MAX_LEVEL = 33085;
declare const MIN = 32775;
declare const MAX = 32776;
declare const DEPTH_COMPONENT24 = 33190;
declare const MAX_TEXTURE_LOD_BIAS = 34045;
declare const TEXTURE_COMPARE_MODE = 34892;
declare const TEXTURE_COMPARE_FUNC = 34893;
declare const CURRENT_QUERY = 34917;
declare const QUERY_RESULT = 34918;
declare const QUERY_RESULT_AVAILABLE = 34919;
declare const STREAM_READ = 35041;
declare const STREAM_COPY = 35042;
declare const STATIC_READ = 35045;
declare const STATIC_COPY = 35046;
declare const DYNAMIC_READ = 35049;
declare const DYNAMIC_COPY = 35050;
declare const MAX_DRAW_BUFFERS = 34852;
declare const DRAW_BUFFER0 = 34853;
declare const DRAW_BUFFER1 = 34854;
declare const DRAW_BUFFER2 = 34855;
declare const DRAW_BUFFER3 = 34856;
declare const DRAW_BUFFER4 = 34857;
declare const DRAW_BUFFER5 = 34858;
declare const DRAW_BUFFER6 = 34859;
declare const DRAW_BUFFER7 = 34860;
declare const DRAW_BUFFER8 = 34861;
declare const DRAW_BUFFER9 = 34862;
declare const DRAW_BUFFER10 = 34863;
declare const DRAW_BUFFER11 = 34864;
declare const DRAW_BUFFER12 = 34865;
declare const DRAW_BUFFER13 = 34866;
declare const DRAW_BUFFER14 = 34867;
declare const DRAW_BUFFER15 = 34868;
declare const MAX_FRAGMENT_UNIFORM_COMPONENTS = 35657;
declare const MAX_VERTEX_UNIFORM_COMPONENTS = 35658;
declare const SAMPLER_3D = 35679;
declare const SAMPLER_2D_SHADOW = 35682;
declare const FRAGMENT_SHADER_DERIVATIVE_HINT = 35723;
declare const PIXEL_PACK_BUFFER = 35051;
declare const PIXEL_UNPACK_BUFFER = 35052;
declare const PIXEL_PACK_BUFFER_BINDING = 35053;
declare const PIXEL_UNPACK_BUFFER_BINDING = 35055;
declare const FLOAT_MAT2x3 = 35685;
declare const FLOAT_MAT2x4 = 35686;
declare const FLOAT_MAT3x2 = 35687;
declare const FLOAT_MAT3x4 = 35688;
declare const FLOAT_MAT4x2 = 35689;
declare const FLOAT_MAT4x3 = 35690;
declare const SRGB = 35904;
declare const SRGB8 = 35905;
declare const SRGB8_ALPHA8 = 35907;
declare const COMPARE_REF_TO_TEXTURE = 34894;
declare const RGBA32F = 34836;
declare const RGB32F = 34837;
declare const RGBA16F = 34842;
declare const RGB16F = 34843;
declare const VERTEX_ATTRIB_ARRAY_INTEGER = 35069;
declare const MAX_ARRAY_TEXTURE_LAYERS = 35071;
declare const MIN_PROGRAM_TEXEL_OFFSET = 35076;
declare const MAX_PROGRAM_TEXEL_OFFSET = 35077;
declare const MAX_VARYING_COMPONENTS = 35659;
declare const TEXTURE_2D_ARRAY = 35866;
declare const TEXTURE_BINDING_2D_ARRAY = 35869;
declare const R11F_G11F_B10F = 35898;
declare const UNSIGNED_INT_10F_11F_11F_REV = 35899;
declare const RGB9_E5 = 35901;
declare const UNSIGNED_INT_5_9_9_9_REV = 35902;
declare const TRANSFORM_FEEDBACK_BUFFER_MODE = 35967;
declare const MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 35968;
declare const TRANSFORM_FEEDBACK_VARYINGS = 35971;
declare const TRANSFORM_FEEDBACK_BUFFER_START = 35972;
declare const TRANSFORM_FEEDBACK_BUFFER_SIZE = 35973;
declare const TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 35976;
declare const RASTERIZER_DISCARD = 35977;
declare const MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 35978;
declare const MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 35979;
declare const INTERLEAVED_ATTRIBS = 35980;
declare const SEPARATE_ATTRIBS = 35981;
declare const TRANSFORM_FEEDBACK_BUFFER = 35982;
declare const TRANSFORM_FEEDBACK_BUFFER_BINDING = 35983;
declare const RGBA32UI = 36208;
declare const RGB32UI = 36209;
declare const RGBA16UI = 36214;
declare const RGB16UI = 36215;
declare const RGBA8UI = 36220;
declare const RGB8UI = 36221;
declare const RGBA32I = 36226;
declare const RGB32I = 36227;
declare const RGBA16I = 36232;
declare const RGB16I = 36233;
declare const RGBA8I = 36238;
declare const RGB8I = 36239;
declare const RED_INTEGER = 36244;
declare const RGB_INTEGER = 36248;
declare const RGBA_INTEGER = 36249;
declare const SAMPLER_2D_ARRAY = 36289;
declare const SAMPLER_2D_ARRAY_SHADOW = 36292;
declare const SAMPLER_CUBE_SHADOW = 36293;
declare const UNSIGNED_INT_VEC2 = 36294;
declare const UNSIGNED_INT_VEC3 = 36295;
declare const UNSIGNED_INT_VEC4 = 36296;
declare const INT_SAMPLER_2D = 36298;
declare const INT_SAMPLER_3D = 36299;
declare const INT_SAMPLER_CUBE = 36300;
declare const INT_SAMPLER_2D_ARRAY = 36303;
declare const UNSIGNED_INT_SAMPLER_2D = 36306;
declare const UNSIGNED_INT_SAMPLER_3D = 36307;
declare const UNSIGNED_INT_SAMPLER_CUBE = 36308;
declare const UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311;
declare const DEPTH_COMPONENT32F = 36012;
declare const DEPTH32F_STENCIL8 = 36013;
declare const FLOAT_32_UNSIGNED_INT_24_8_REV = 36269;
declare const FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 33296;
declare const FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 33297;
declare const FRAMEBUFFER_ATTACHMENT_RED_SIZE = 33298;
declare const FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 33299;
declare const FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 33300;
declare const FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 33301;
declare const FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 33302;
declare const FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 33303;
declare const FRAMEBUFFER_DEFAULT = 33304;
declare const UNSIGNED_INT_24_8 = 34042;
declare const DEPTH24_STENCIL8 = 35056;
declare const UNSIGNED_NORMALIZED = 35863;
declare const DRAW_FRAMEBUFFER_BINDING = 36006;
declare const READ_FRAMEBUFFER = 36008;
declare const DRAW_FRAMEBUFFER = 36009;
declare const READ_FRAMEBUFFER_BINDING = 36010;
declare const RENDERBUFFER_SAMPLES = 36011;
declare const FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 36052;
declare const MAX_COLOR_ATTACHMENTS = 36063;
declare const COLOR_ATTACHMENT1 = 36065;
declare const COLOR_ATTACHMENT2 = 36066;
declare const COLOR_ATTACHMENT3 = 36067;
declare const COLOR_ATTACHMENT4 = 36068;
declare const COLOR_ATTACHMENT5 = 36069;
declare const COLOR_ATTACHMENT6 = 36070;
declare const COLOR_ATTACHMENT7 = 36071;
declare const COLOR_ATTACHMENT8 = 36072;
declare const COLOR_ATTACHMENT9 = 36073;
declare const COLOR_ATTACHMENT10 = 36074;
declare const COLOR_ATTACHMENT11 = 36075;
declare const COLOR_ATTACHMENT12 = 36076;
declare const COLOR_ATTACHMENT13 = 36077;
declare const COLOR_ATTACHMENT14 = 36078;
declare const COLOR_ATTACHMENT15 = 36079;
declare const FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 36182;
declare const MAX_SAMPLES = 36183;
declare const HALF_FLOAT = 5131;
declare const RG = 33319;
declare const RG_INTEGER = 33320;
declare const R8 = 33321;
declare const RG8 = 33323;
declare const R16F = 33325;
declare const R32F = 33326;
declare const RG16F = 33327;
declare const RG32F = 33328;
declare const R8I = 33329;
declare const R8UI = 33330;
declare const R16I = 33331;
declare const R16UI = 33332;
declare const R32I = 33333;
declare const R32UI = 33334;
declare const RG8I = 33335;
declare const RG8UI = 33336;
declare const RG16I = 33337;
declare const RG16UI = 33338;
declare const RG32I = 33339;
declare const RG32UI = 33340;
declare const VERTEX_ARRAY_BINDING = 34229;
declare const R8_SNORM = 36756;
declare const RG8_SNORM = 36757;
declare const RGB8_SNORM = 36758;
declare const RGBA8_SNORM = 36759;
declare const SIGNED_NORMALIZED = 36764;
declare const COPY_READ_BUFFER = 36662;
declare const COPY_WRITE_BUFFER = 36663;
declare const COPY_READ_BUFFER_BINDING = 36662;
declare const COPY_WRITE_BUFFER_BINDING = 36663;
declare const UNIFORM_BUFFER = 35345;
declare const UNIFORM_BUFFER_BINDING = 35368;
declare const UNIFORM_BUFFER_START = 35369;
declare const UNIFORM_BUFFER_SIZE = 35370;
declare const MAX_VERTEX_UNIFORM_BLOCKS = 35371;
declare const MAX_FRAGMENT_UNIFORM_BLOCKS = 35373;
declare const MAX_COMBINED_UNIFORM_BLOCKS = 35374;
declare const MAX_UNIFORM_BUFFER_BINDINGS = 35375;
declare const MAX_UNIFORM_BLOCK_SIZE = 35376;
declare const MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 35377;
declare const MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 35379;
declare const UNIFORM_BUFFER_OFFSET_ALIGNMENT = 35380;
declare const ACTIVE_UNIFORM_BLOCKS = 35382;
declare const UNIFORM_TYPE = 35383;
declare const UNIFORM_SIZE = 35384;
declare const UNIFORM_BLOCK_INDEX = 35386;
declare const UNIFORM_OFFSET = 35387;
declare const UNIFORM_ARRAY_STRIDE = 35388;
declare const UNIFORM_MATRIX_STRIDE = 35389;
declare const UNIFORM_IS_ROW_MAJOR = 35390;
declare const UNIFORM_BLOCK_BINDING = 35391;
declare const UNIFORM_BLOCK_DATA_SIZE = 35392;
declare const UNIFORM_BLOCK_ACTIVE_UNIFORMS = 35394;
declare const UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 35395;
declare const UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 35396;
declare const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 35398;
declare const INVALID_INDEX = 4294967295;
declare const MAX_VERTEX_OUTPUT_COMPONENTS = 37154;
declare const MAX_FRAGMENT_INPUT_COMPONENTS = 37157;
declare const MAX_SERVER_WAIT_TIMEOUT = 37137;
declare const OBJECT_TYPE = 37138;
declare const SYNC_CONDITION = 37139;
declare const SYNC_STATUS = 37140;
declare const SYNC_FLAGS = 37141;
declare const SYNC_FENCE = 37142;
declare const SYNC_GPU_COMMANDS_COMPLETE = 37143;
declare const UNSIGNALED = 37144;
declare const SIGNALED = 37145;
declare const ALREADY_SIGNALED = 37146;
declare const TIMEOUT_EXPIRED = 37147;
declare const CONDITION_SATISFIED = 37148;
declare const WAIT_FAILED = 37149;
declare const SYNC_FLUSH_COMMANDS_BIT = 1;
declare const VERTEX_ATTRIB_ARRAY_DIVISOR = 35070;
declare const ANY_SAMPLES_PASSED = 35887;
declare const ANY_SAMPLES_PASSED_CONSERVATIVE = 36202;
declare const SAMPLER_BINDING = 35097;
declare const RGB10_A2UI = 36975;
declare const INT_2_10_10_10_REV = 36255;
declare const TRANSFORM_FEEDBACK = 36386;
declare const TRANSFORM_FEEDBACK_PAUSED = 36387;
declare const TRANSFORM_FEEDBACK_ACTIVE = 36388;
declare const TRANSFORM_FEEDBACK_BINDING = 36389;
declare const TEXTURE_IMMUTABLE_FORMAT = 37167;
declare const MAX_ELEMENT_INDEX = 36203;
declare const TEXTURE_IMMUTABLE_LEVELS = 33503;
declare const TIMEOUT_IGNORED = -1;
declare const MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 37447;
declare var gl: WebGLRenderingContext;
interface WebGLRenderbuffer {
    width?: number;
    height?: number;
}
declare type GLExtension = "OES_texture_float" | "OES_texture_float_linear" | "OES_texture_half_float" | "OES_texture_half_float_linear";
declare function useGLExtention(name: GLExtension): boolean;
declare const CullFaceMode: {
    "back": number;
    "front": number;
    "front and back": number;
};
declare function useCullFace(mode?: keyof typeof CullFaceMode): void;
declare const TestFunc: {
    "greater": number;
    "gequal": number;
    "lequal": number;
    "less": number;
    "notequal": number;
    "equal": number;
    "never": number;
    "always": number;
};
declare function useDepthTest(active: false): void;
declare function useDepthTest(func?: keyof typeof TestFunc): void;
declare function useStencilFunc(func: keyof typeof TestFunc, ref: number, mask: number): void;
declare function usePolygonOffset(active: false): void;
declare function usePolygonOffset(): void;
declare function usePolygonOffset(factor: number, units: number): void;
declare function useSampleCoverage(value: number, invert: boolean): void;
declare function useScissor(x: number, y: number, width: number, height: number): void;
declare const BlendEquationMode: {
    "add": number;
    "func substract": number;
    "func reverse substract": number;
};
declare const BlendFuncFactor: {
    "zero": number;
    "one": number;
    "src color": number;
    "one minus src color": number;
    "dst color": number;
    "one minus dst color": number;
    "src alpha": number;
    "one minus src alpha": number;
    "dst alpha": number;
    "one minus dst alpha": number;
    "constant color": number;
    "one minus constant color": number;
    "constant alpha": number;
    "one minus constant alpha": number;
    "src alpha saturate": number;
};
declare function useBlend(active: false): void;
declare function useBlend(): void;
declare function useBlend(equation: keyof typeof BlendEquationMode, sfactor: keyof typeof BlendFuncFactor, dfactor: keyof typeof BlendFuncFactor): void;
declare function drawOnTexture(tex: ITexture2D): void;
declare function drawOnView(): void;
declare namespace Internal {
    function InitGLContext(offscreen: OffscreenCanvas): void;
    const UniformTypes: {
        byte: number;
        ubyte: number;
        short: number;
        ushort: number;
        int: number;
        uint: number;
        ivec2: number;
        ivec3: number;
        ivec4: number;
        float: number;
        fmat2: number;
        fmat3: number;
        fmat4: number;
        fvec2: number;
        fvec3: number;
        fvec4: number;
        bool: number;
        bvec2: number;
        bvec3: number;
        bvec4: number;
        tex2D: number;
        texCube: number;
        tex3D: number;
        tex2D_arr: number;
        tex2D_arrshadow: number;
        tex2D_shadow: number;
        texCube_shadow: number;
        itex2D: number;
        itex2D_arr: number;
        itex3D: number;
        itexCUBE: number;
        uitex2D: number;
        uitex2D_arr: number;
        uitex3D: number;
        uitexCube: number;
        texBinding: number;
    };
}
interface ISketch {
    onError?(err: Error): void;
}
declare var error: Error;
declare var stopOnError: boolean;
declare var OnError: (err: Error) => void;
declare namespace Internal {
    function addError(err: Error): void;
    function addAndEmitError(err: Error): void;
    function initSketchErrorEvents(): void;
}
declare var HasDownKeys: boolean;
declare var Key: string;
declare var KeyCode: number;
declare var OnKeyDown: () => void;
declare var OnKeyUp: () => void;
declare function getKeys(): string[];
declare function isDownKey(key: string): boolean;
declare function isDownKey(keyCode: number): boolean;
declare function isDownKey(combination: Array<string | number>): boolean;
declare namespace Internal {
    function onKeyDown(data: g3.KeyDownMessage): void;
    function onKeyUp(data: g3.KeyUpMessage): void;
}
declare var PointerLocation: [number, number];
declare var PointerMovement: [number, number];
declare var PointerX: number;
declare var PointerY: number;
declare var deltaX: number;
declare var deltaY: number;
declare var OnPointerMove: () => void;
declare namespace Internal {
    function onPointerMove(data: g3.PointerMessage): void;
}
declare var WheelDelta: number;
declare var WheelMode: number;
declare var OnWheel: () => void;
declare namespace Internal {
    function onWheelEvent(data: g3.WheelMessage): void;
}
declare var Button: number;
declare var OnButtonDown: () => void;
declare var OnButtonUp: () => void;
declare namespace Internal {
    function onButtonDown(data: g3.ButtonMessage): void;
    function onButtonUp(data: g3.ButtonMessage): void;
}
declare var OnResize: () => void;
declare namespace Internal {
    function onResize(data: g3.ResizeMessage): void;
}
declare const IS_RESOURCE: unique symbol;
interface IResource<T = any> {
    readonly isLoaded: boolean;
    readonly data: T | null;
}
declare function loadImage<T>(url: string, callback?: (rsc: ImageBitmap) => T): IResource<T>;
declare function loadText<T>(url: string, callback?: (rsc: string) => T): IResource<T>;
declare function loadJson<T>(url: string, callback?: (rsc: object) => T): IResource<T>;
declare namespace Internal {
    type Resource<T = any> = {
        -readonly [K in keyof IResource<T>]: IResource<T>[K];
    } & {
        [IS_RESOURCE]: true;
    };
    function isLoading(): boolean;
    function setBaseUri(uri: string): void;
    function getResourcePath(path: string): string;
}
declare var Width: number;
declare var Height: number;
declare function drawBackground(r: number, g: number, b: number, a: number): void;
declare function setClearColor(r: number, g: number, b: number, a: number): void;
declare function clearView(stencil?: boolean): void;
declare namespace Internal {
    type FullscreenOptions = {
        paddingTop?: number;
        paddingLeft?: number;
        paddingRight?: number;
        paddingBottom?: number;
        camera?: any;
        fov?: number;
        near?: number;
        far?: number;
    };
    function initView(offcanvas: OffscreenCanvas): void;
    function resizeView(width: number, height: number): void;
}
declare const AxisX: [number, number, number];
declare const AxisY: [number, number, number];
declare const AxisZ: [number, number, number];
declare function resetViewMatrix(): void;
declare function usePerspectiveView(fov: number, near: number, far: number): void;
declare function frustumView(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
declare function useOrthogonalView(l: number, r: number, b: number, t: number, n: number, f: number): void;
declare function scaleView(x: number, y: number, z: number): void;
declare function zoomView(zoom: number): void;
declare function translateView(x: number, y: number, z: number): void;
declare function rotateView(a: number, x: number, y: number, z: number): void;
declare function getProjectionMatrix(): mat4;
declare function requestAnimationFrame(callbacl: (time: number) => void): void;
declare var OnSetup: () => void;
declare var OnDraw: (millis: number) => void;
declare function draw(): void;
declare function play(): void;
declare function pause(): void;
declare type TextureSource = ITexture2D | ITextureCude;
interface TextureOptions {
    format?: number;
    type?: number;
    filter?: number;
    magFilter?: number;
    minFilter?: number;
    wrap?: number;
    wrapS?: number;
    wrapT?: number;
    data?: ArrayBufferView;
}
interface ITextureCudeImages {
    xneg: any;
    xpos: any;
    yneg: any;
    ypos: any;
    zneg: any;
    zpos: any;
}
interface ITexture2D {
    readonly width: number;
    readonly height: number;
    readonly imageElement?: TexImageSource;
}
interface ITextureCude {
    images: ITextureCudeImages;
}
declare function fetchTexture(url: string, options?: TextureOptions): ITexture2D;
declare function fetchTextureCube(imgs: ITextureCudeImages): ITextureCude;
declare function createTexture(width: number, height: number, options?: TextureOptions): ITexture2D;
declare function createTextureCude(imgs: ITextureCudeImages): ITextureCude;
declare function useTexture(texture: TextureSource, position?: number): TextureSource;
declare function swapTextures(texA: ITexture2D, texB: ITexture2D): void;
declare namespace Internal {
    interface BindableTexture {
        GL_HANDLE: WebGLTexture;
        GL_TARGET: number;
        isBinded: boolean;
        bindIndex: number;
    }
    type LSampler = Sampler2D | SamplerCube;
    type Sampler2D = {
        -readonly [K in keyof ITexture2D]: ITexture2D[K];
    } & BindableTexture & {
        GL_TARGET: 0x0DE1;
    } & {
        GL_FORMAT: number;
        GL_TYPE: number;
    };
    type SamplerCube = {
        -readonly [K in keyof ITextureCude]: ITextureCude[K];
    } & BindableTexture & {
        GL_TARGET: 0x8513;
    };
}
interface IBuffer<T = BufferSource, D = number[]> {
    readonly name: string;
    readonly ctor: new (data: D) => T;
    readonly data: D[];
}
declare enum BufferTarget {
    ARRAY_BUFFER = 34962,
    ELEMENT_ARRAY_BUFFER = 34963
}
declare namespace Internal {
    interface BufferOptions {
        normals?: boolean;
        lines?: boolean;
        coords?: boolean;
        colors?: boolean;
        triangles?: boolean;
    }
    type Buffer<T = BufferSource, D = number[]> = {
        -readonly [P in keyof IBuffer<T, D>]: IBuffer<T, D>[P];
    } & {
        GL_TYPE: number;
        GL_TARGET: BufferTarget;
        GL_HANDLE: WebGLBuffer;
        length: number;
        element_size: number;
        element_count: number;
    };
    function isVBO(buffer: IBuffer): boolean;
    function isIBO(buffer: IBuffer): boolean;
    function createVertexBuffer(name: string): Buffer<Float32Array>;
    function createVertexBuffer(name: "vertices"): Buffer<Float32Array, [number, number, number]>;
    function createVertexBuffer(name: "normals"): Buffer<Float32Array, [number, number, number]>;
    function createVertexBuffer(name: "colors"): Buffer<Float32Array, [number, number, number, number]>;
    function createVertexBuffer(name: "coords"): Buffer<Float32Array, [number, number]>;
    function createIndexBuffer(name: string): Buffer<Uint16Array>;
    function createIndexBuffer(name: "lines"): Buffer<Uint16Array, [number, number]>;
    function createIndexBuffer(name: "triangles"): Buffer<Uint16Array, [number, number, number]>;
    function uploadBuffer(buffer: IBuffer, dynamic?: boolean): void;
    function uploadBuffers(buffers: {
        [k: string]: IBuffer;
    }, dynamic?: boolean): void;
}
interface IShader {
    readonly vertexSource: string;
    readonly fragmentSource: string;
    onUse: (() => void) | null;
}
declare function fetchShader(vspath: string, fspath: string): IShader;
declare function createShader(vssource: string | Array<string>, fssource: string | Array<string>): IShader;
declare function useShader(shader: IShader | IResource<IShader>, data?: {
    [key: string]: any;
}): void;
declare function getCurrentShader(): IShader;
declare function setShaderData(data: {
    [key: string]: any;
}): void;
declare function attachShaderBuffers(mesh: IMesh): void;
declare function attachShaderAttributes(data: {
    [key: string]: any;
}): void;
declare function setShaderUniforms(data: {
    [key: string]: any;
}): void;
declare namespace Internal {
    interface AttributeInfo extends WebGLActiveInfo {
        location: NonNullable<number>;
    }
    interface UniformInfo extends WebGLActiveInfo {
        location: NonNullable<WebGLUniformLocation>;
        isSampler: NonNullable<boolean>;
    }
    type Shader = {
        -readonly [P in keyof IShader]: IShader[P];
    } & {
        program: NonNullable<WebGLProgram>;
        attInfos: {
            [key: string]: NonNullable<AttributeInfo>;
        };
        uniInfos: {
            [key: string]: NonNullable<UniformInfo>;
        };
    };
}
declare type BuitinShaderNames = "uvColor";
declare function buitinShader(name: BuitinShaderNames): IShader;
declare function resetTransformations(): void;
declare function pushTransformations(): void;
declare function popTransformations(): void;
declare function translate(offset: LVec3): void;
declare function translate(offsetX: number, offsetY: number, offsetZ: number): void;
declare function translateX(offset: number): void;
declare function translateY(offset: number): void;
declare function translateZ(offset: number): void;
declare function rotate(angle: number, x: number, y: number, z: number): void;
declare function rotate(angle: number, axis: LVec3): void;
declare function rotateX(angle: number): void;
declare function rotateY(angle: number): void;
declare function rotateZ(angle: number): void;
declare function scale(factor: number): void;
declare function scale(factors: LVec3): void;
declare function scale(x: number, y: number, z: number): void;
declare function scaleX(factor: number): void;
declare function scaleY(factor: number): void;
declare function scaleZ(factor: number): void;
declare function getTransforms(): mat4;
declare function getTransformsInverse(): mat4;
declare function getTransformsProjection(): mat4;
interface IMesh {
    onDraw?: () => void;
    readonly buffers: IMeshBuffers;
}
interface IMeshBuffers {
    readonly vertices: IBuffer<Float32Array, [number, number, number]>;
    readonly normals?: IBuffer<Float32Array, [number, number, number]>;
    readonly colors?: IBuffer<Float32Array, [number, number, number, number]>;
    readonly coords?: IBuffer<Float32Array, [number, number]>;
    readonly triangles?: IBuffer<Uint16Array, [number, number, number]>;
    readonly lines?: IBuffer<Uint16Array, [number, number]>;
    readonly [key: string]: IBuffer;
}
declare function fetchMesh(path: string): IMesh;
declare function loadMesh(json: object): IMesh;
declare function createMesh(options?: Internal.BufferOptions): IMesh;
declare function setDrawingMode(mode: Internal.DrawingMode): void;
declare function drawMesh(mesh: IMesh): void;
declare function computeWireframe(mesh: IMesh): IMesh;
declare namespace Internal {
    type Mesh = {
        onDraw?: () => void;
        buffers: MeshBuffers;
    };
    type MeshBuffers = {
        vertices: Buffer<Float32Array, [number, number, number]>;
        normals?: Buffer<Float32Array, [number, number, number]>;
        colors?: Buffer<Float32Array, [number, number, number, number]>;
        coords?: Buffer<Float32Array, [number, number]>;
        triangles?: Buffer<Uint16Array, [number, number, number]>;
        lines?: Buffer<Uint16Array, [number, number]>;
        [key: string]: Buffer;
    };
    type DrawingMode = "points" | "line strip" | "line loop" | "lines" | "triangle strip" | "triangle fan" | "triangles";
}
declare namespace Internal {
    class Indexer<T> {
        unique: T[];
        indices: number[];
        map: {
            [key: string]: number;
        };
        add(obj: T): number;
    }
}
declare function beginMesh(mode: Internal.DrawingMode): void;
declare function setPointSize(size: number): void;
declare function setLineWidth(width: number): void;
declare function setVertexColor(r: number, g: number, b: number, a?: number): void;
declare function setVertexColor(color: LVec3 | LVec4): void;
declare function texCoord(u: number, v: number): void;
declare function texCoord(coord: vec2): void;
declare function drawVertex(x: number, y: number, z: number): void;
declare function drawVertex(vertex: LVec3): void;
declare function drawVertices(...vertices: LVec3[]): void;
declare function endMesh(tdraw?: boolean): IMesh;
declare type PlaneOptions = Internal.BufferOptions & {
    detail?: number;
    detailX?: number;
    detailY?: number;
};
declare function createPlane(options?: PlaneOptions): IMesh;
declare type BoxOptions = Internal.BufferOptions & {
    detail?: number;
    detailX?: number;
    detailY?: number;
};
declare function createBox(options?: BoxOptions): IMesh;
declare type SphereOptions = Internal.BufferOptions & {
    detail?: number;
    radius?: number;
};
declare function createSphere(options?: SphereOptions): IMesh;
declare namespace Internal {
    function compileSketch(path: string, cb: (src: string) => void): void;
}

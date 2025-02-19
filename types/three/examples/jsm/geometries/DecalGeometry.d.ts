import { BufferGeometry, Euler, Mesh, Vector3 } from "three";

declare class DecalGeometry extends BufferGeometry {
    constructor(mesh?: Mesh, position?: Vector3, orientation?: Euler, size?: Vector3);
}

declare class DecalVertex {
    position: Vector3;
    normal: Vector3 | null;

    constructor(position: Vector3, normal?: Vector3 | null);

    clone(): this;
}

export { DecalGeometry, DecalVertex };

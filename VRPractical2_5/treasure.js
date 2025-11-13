class Treasure {
  constructor(x, y, z) {
    this.obj = document.createElement("a-octahedron");
    this.obj.setAttribute("color", "gold");
    this.obj.setAttribute("scale", "0.5 0.5 0.5");
    this.obj.setAttribute("position", { x: x, y: y + 0.4, z: z });

    scene.append(this.obj);
  }
}
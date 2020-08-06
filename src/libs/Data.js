class Data {
  constructor(baze) {
    if (!baze.libs.Cache) throw new Error(`${this.constructor.name} needs Cache to work`);
    this.data = {};
  }
}

export default Data;

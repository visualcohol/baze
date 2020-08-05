import Event from './Event';

class Baze {
  constructor(globalVar = 'Baze') {
    if (!!Baze.instance) return Baze.instance;
    Baze.instance = this;

    this.globalVar = globalVar;

    this.createGlobal(globalVar);
  }

  createGlobal(globalVar) {
    window[globalVar] = {
      //Event: new Event(),
      Baze: this,
    };
  }

  register(classConstructor) {
    if (window[this.globalVar][classConstructor.name]) {
      throw new Error(`There is already a function "${classConstructor.name}" registered.`);
    } else {
      window[this.globalVar][classConstructor.name] = new classConstructor();
    }
  }
}

export default Baze;
export { Baze, Event };

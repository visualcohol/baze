import Event from './Event';
import Cache from './Cache';
import Data from './Data';

class Baze {
  constructor(globalVarName = 'Baze') {
    if (!!Baze.instance) return Baze.instance;
    Baze.instance = this;

    this.libs = {
      Baze: this,
    };

    this.globalVarName = globalVarName.toLowerCase();
    this.createGlobal(this.globalVarName);
  }

  createGlobal(globalVarName) {
    window[globalVarName] = this.libs;
  }

  register(classConstructor) {
    if (window[this.globalVarName][classConstructor.name]) {
      throw new Error(`There is already a function "${classConstructor.name}" registered.`);
    } else {
      window[this.globalVarName][classConstructor.name] = new classConstructor(this);
    }
  }
}

export default Baze;
export { Event, Data, Cache };

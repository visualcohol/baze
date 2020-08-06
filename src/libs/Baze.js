import Event from './Event';
import Cache from './Cache';
import Data from './Data';

class Baze {
  constructor(globalVarName = 'Baze') {
    if (!!Baze.instance) return Baze.instance;
    Baze.instance = this;

    this.libs = {
      baze: this,
      event: new Event(this),
      data: new Data(this),
      cache: new Cache(this),
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
      window[this.globalVarName][classConstructor.name.toLowerCase()] = new classConstructor();
    }
  }
}

export default Baze;
export { Baze, Event, Data, Cache };

import { Baze, Event, Data, Cache } from './libs/Baze';

let baze = new Baze('Test');

class myClass {
  constructor() {}
}

baze.register(myClass);

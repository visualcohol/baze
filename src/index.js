import { Baze, Event, Data, Cache } from './libs/Baze';

let baze = new Baze('Test');

class myClass extends Event {
  constructor() {
    super();
  }
}

baze.register(myClass);

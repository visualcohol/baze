import Baze, { Event } from './libs/Baze';

let baze = new Baze('Test');

class myClass {
  constructor(baze) {}

  fetch() {
    // Get remote data then publish event
    baze.libs.Event.publish('fetched');
  }
}

baze.register(Event);
baze.register(myClass);

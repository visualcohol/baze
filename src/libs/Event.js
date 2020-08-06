class Event {
  constructor(baze) {
    this.events = {};
  }

  static createInstance() {
    return new this();
  }

  // Publish
  publish(event, payload = '') {
    if (!this.events[event]) return;

    Object.values(this.events[event]).forEach((event) => event(payload));
  }

  // Subscribe
  on(event, next) {
    if (!this.events[event]) this.events[event] = {};

    let id = this.createId(event);
    this.events[event][id] = next;

    return { id, event };
  }

  // Unubscribe
  off(eventObj) {
    if (this.events[eventObj.event] && this.events[eventObj.event][eventObj.id]) {
      delete this.events[eventObj.event][eventObj.id];
    }
  }

  // Event ID generator
  createId(event) {
    let id = Math.random().toString(36).substr(2, 9);

    if (this.events[event].id) {
      this.createId();
    } else {
      return id;
    }
  }
}

export default Event;

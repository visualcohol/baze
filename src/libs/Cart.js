class Cart {
  constructor(baze) {
    if (!baze.libs.Cache) throw new Error(`${this.constructor.name} needs Data to work`);
  }
}

export default Cart;

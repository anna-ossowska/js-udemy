/* eslint-disable no-new-object */

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'John' });
    return object;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// You cannot have more than one inctance with this pattern
const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
console.log(instanceA);

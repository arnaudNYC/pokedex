const Pokedex = function Pokedex() {
  this.foo = function foo() {
    return new Promise(function p(resolve) {
      resolve('foo');
    });
  };
  this.bad = function foo() {
    return new Promise(function p(resolve, reject) {
      reject(new Error('bad'));
    });
  };
};

module.exports = {
  Pokedex,
};

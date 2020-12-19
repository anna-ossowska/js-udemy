// Basic structure

// (function() {
//   // Decalre private variables and functions

//   return {
//     // Declare public variables and functions
//   }
// })();

// Standard MODULE PATTERN

const UICtrl = (function() {
  const text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  };
  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  };
})();

UICtrl.callChangeText(); // Hello World

// UICtrl.changeText(); // Type Error, we call a provate function

// console.log(UICtrl.text); // undefined

// REVEALING MODULE PATTERN

const ItemCtrl = (function() {
  const data = []; // * _var means private var

  function add(item) {
    data.push(item);
    console.log('Item added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }
  return {
    // we directly return an object literal that directly reveals methods that are inside of the module
    // if not included here, those method will remain private
    add: add,
    get: get
  };
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Bob' });
console.log(ItemCtrl.get(2));

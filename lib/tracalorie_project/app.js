/* eslint-disable no-unused-vars */

// Storage Controller

// Item Controller
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State
  const data = {
    items: [
      { id: 0, name: 'Steak Dinner', calories: 500 },
      { id: 1, name: 'Cookie', calories: 300 },
      { id: 2, name: 'Eggs', calories: 250 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  // Public methods
  // return by default makes data public
  return {
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  };
})();

// UI Controller
const UICtrl = (function() {
  // For quick update of <li>'s id
  const UISelectors = {
    itemList: '#item-list'
  };

  // Public methods
  return {
    populateItemList: function(items) {
      let html = '';

      items.forEach(function(item) {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong><em>${item.calories} kcal</em>
        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
      </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  };
})();

// App Controller
const App = (function(IemCtrl, UICtrl) {
  // Public methods
  return {
    init: function() {
      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemList(items);
    }
  };
})(ItemCtrl, UICtrl);

// Intialize App
App.init();

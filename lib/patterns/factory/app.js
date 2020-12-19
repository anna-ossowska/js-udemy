/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Factory pattern can be used if you have different object which share a lot of the same properties and methods
// Here we have different memberships

function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };
    return member;
  };
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5;';
};

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15;';
};

const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25;';
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Jane Smith', 'standard'));
members.push(factory.createMember('William Johnson', 'super'));

// console.log(members);

members.forEach(function(member) {
  member.define();
});

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// Extend the Person class and create the Customer class (being a subclass of Person)

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    // anything that is not inside the Person class is defined here:
    this.phone = phone;
    this.membership = membership;
  }

  // Customer specific method | class method
  static getMembershipCost() {
    return 5000;
  }
};

// Instantiate the new Customer
const customer1 = new Customer('John', 'Doe', '23235255', 'standard');
console.log(customer1);

// Person specific method
console.log(customer1.greeting());

// Customer specific class method
console.log(Customer.getMembershipCost());

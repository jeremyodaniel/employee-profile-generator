// Employee class and constructs
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
	// Each get() method gets one of the class constructs.
	getName() {
		return this.name;
	}
	
	getId() {
		return this.id;
	}
	
	getEmail() {
		return this.email;
	}
	
	getRole() {
		return 'Employee';
	}
	
};

	// Export the class
	module.exports = Employee;
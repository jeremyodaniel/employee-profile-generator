const Employee = require('./Employee')

// Manager class generating constructs from Employee with extend
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
    // Each get() method gets one of the class constructs.      
    getOfficeNumber() {
        return this.officeNumber;
    }  

    getRole() {
        return 'Manager';
    }
      
  };
  
// Export the class
module.exports = Manager;
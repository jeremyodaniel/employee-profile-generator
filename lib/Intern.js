const Employee = require('./Employee')

// Intern class generating constructs from Employee with extend
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  
    // Each get() method gets one of the class constructs.
    getSchool() {
			return this.school;
		}
    
    getRole() {
        return 'Intern';
    }
      
};
  
// Export the class
module.exports = Intern;
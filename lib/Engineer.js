const Employee = require('./Employee')

// Engineer class generating constructs from Employee with extend
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  
    // Each get() method gets one of the class constructs.
    getGithub() {
			return this.github;
		}
    
    getRole() {
        return 'Engineer';
    }
      
};
  
// Export the class
module.exports = Engineer;
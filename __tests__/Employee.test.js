const Employee = require('../lib/Employee');

test('creates an employee obect', () => {
	const employee = new Employee();
	expect(typeof(employee)).toBe('object');
});

// gets name
test('gets employee name', () => {
	const employee = new Employee("Bob Dole", '501', 'bdole@Worker.com');
	expect(employee.getName()).toEqual(expect.any(String));
});

// gets id
test('gets employee id', () => {
	const employee = new Employee("Bob Dole", '501', 'bdole@Worker.com');
	expect(employee.getId()).toEqual(expect.any(String));
});

// gets email
test('gets employee email', () => {
	const employee = new Employee("Bob Dole", '501', 'bdole@Worker.com');
	expect(employee.getEmail()).toEqual(expect.any(String));
});

// gets role
test('gets employee email', () => {
	const employee = new Employee("Bob Dole", '501', 'bdole@Worker.com');
	expect(employee.getRole()).toEqual('Employee');
});
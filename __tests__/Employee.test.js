const Employee = require('../lib/Employee');

test('creates an employee obect', () => {
	const employee = new Employee("Bob Dole", '501', 'bdole@Worker.com');
	expect(employee.name).toEqual(expect.any(String));
	expect(employee.id).toEqual(expect.any(String));
	expect(employee.email).toEqual(expect.any(String));
});


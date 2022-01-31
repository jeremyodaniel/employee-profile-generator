const Manager = require('../lib/Manager');

test('creates an manager obect', () => {
	const manager = new Manager();
	expect(typeof(manager)).toBe('object');
});

// gets name
test('gets manager name', () => {
	const manager = new Manager("Bob Dole", '501', 'bdole@Worker.com', '5015871917');
	expect(manager.getName()).toEqual(expect.any(String));
});

// gets id
test('gets manager id', () => {
	const manager = new Manager("Bob Dole", '501', 'bdole@Worker.com', '5015871917');
	expect(manager.getId()).toEqual(expect.any(String));
});

// gets email
test('gets manager email', () => {
	const manager = new Manager("Bob Dole", '501', 'bdole@Worker.com', '5015871917');
	expect(manager.getEmail()).toEqual(expect.any(String));
});

// gets office number
test('gets manager officeNumber', () => {
	const manager = new Manager("Bob Dole", '501', 'bdole@Worker.com', '5015871917');
	expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});

// gets role
test('gets manager role', () => {
	const manager = new Manager("Bob Dole", '501', 'bdole@Worker.com', '5015871917');
	expect(manager.getRole()).toEqual('Manager');
});
const Intern = require('../lib/Intern');

test('creates an intern obect', () => {
	const intern = new Intern();
	expect(typeof(intern)).toBe('object');
});

// gets name
test('gets intern name', () => {
	const intern = new Intern("Bob Dole", '501', 'bdole@Worker.com', 'SMU');
	expect(intern.getName()).toEqual(expect.any(String));
});

// gets id
test('gets intern id', () => {
	const intern = new Intern("Bob Dole", '501', 'bdole@Worker.com', 'SMU');
	expect(intern.getId()).toEqual(expect.any(String));
});

// gets email
test('gets intern email', () => {
	const intern = new Intern("Bob Dole", '501', 'bdole@Worker.com', 'SMU');
	expect(intern.getEmail()).toEqual(expect.any(String));
});

// gets school
test('gets intern school', () => {
	const intern = new Intern("Bob Dole", '501', 'bdole@Worker.com', 'SMU');
	expect(intern.getSchool()).toEqual(expect.any(String));
});

// gets role
test('gets intern role', () => {
	const intern = new Intern("Bob Dole", '501', 'bdole@Worker.com', 'SMU');
	expect(intern.getRole()).toEqual('Intern');
});
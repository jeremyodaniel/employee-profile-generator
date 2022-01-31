const Engineer = require('../lib/Engineer');

test('creates an engineer obect', () => {
	const engineer = new Engineer();
	expect(typeof(engineer)).toBe('object');
});

// gets name
test('gets engineer name', () => {
	const engineer = new Engineer("Bob Dole", '501', 'bdole@Worker.com', 'bdole.github');
	expect(engineer.getName()).toEqual(expect.any(String));
});

// gets id
test('gets engineer id', () => {
	const engineer = new Engineer("Bob Dole", '501', 'bdole@Worker.com', 'bdole.github');
	expect(engineer.getId()).toEqual(expect.any(String));
});

// gets email
test('gets engineer email', () => {
	const engineer = new Engineer("Bob Dole", '501', 'bdole@Worker.com', 'bdole.github');
	expect(engineer.getEmail()).toEqual(expect.any(String));
});

// gets github
test('gets engineer github', () => {
	const engineer = new Engineer("Bob Dole", '501', 'bdole@Worker.com', 'bdole.github');
	expect(engineer.getGithub()).toEqual(expect.any(String));
});

// gets role
test('gets engineer role', () => {
	const engineer = new Engineer("Bob Dole", '501', 'bdole@Worker.com', 'bdole.github');
	expect(engineer.getRole()).toEqual('Engineer');
});
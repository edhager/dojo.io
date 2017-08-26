import 'intern';

export const loaderOptions = {
	packages: [
		{ name: '@dojo', location: './node_modules/@dojo' },
		{ name: 'pepjs', location: 'node_modules/pepjs/dist', main: 'pep' },
		{ name: 'tslib', location: './node_modules/tslib', main: 'tslib.js' },
		{ name: 'support', location: './_build/support' },
		{ name: 'tests', location: './_build/tests' },
		{ name: 'site', location: './_build/site' },
		{ name: 'tutorials', location: './_build/site/source/tutorials'}
	]
};

export const suites = [ 'tests/unit/all' ];

export const excludeInstrumentation = /^(?:tests|node_modules)\//;

export const loaders = {
	'host-node': '@dojo/loader'
};

export const filterErrorStack = true;

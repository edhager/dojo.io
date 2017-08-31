import 'intern';
import * as base from './intern-base';

export const loaderOptions = base.loaderOptions;
export const excludeInstrumentation = base.excludeInstrumentation;
export const loaders = base.loaders;
export const filterErrorStack = base.filterErrorStack;

export const suites = [ 'tests/unit/all-browser' ];

loaderOptions.packages.push({ name: 'maquette', location: './node_modules/maquette/dist', main: 'maquette' });

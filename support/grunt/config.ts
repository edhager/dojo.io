import { Config } from 'webserv/commands/createServer';
import { middleware } from './config/webserv';
import { repositorySource } from 'grunt-dojo2-extras/src/util/environment';
let createProcessors = require('grunt-dojo2/tasks/util/postcss').createProcessors;

import { join } from 'path';

export interface WebServerConfig {
	[ key: string ]: Config;
}

// ---------------------------------------------------------------------------------------------------------------------
// Variables
// ---------------------------------------------------------------------------------------------------------------------
export const [ repoOwner, repoName ] = repositorySource().split('/');

export const dojoProjectOwner = 'dojo';

export const ghPagesBranch = 'gh-pages';

export const binDirectory = join('node_modules', '.bin');

export const distDirectory = '_dist';

export const buildDirectory = '_build';

export const htmlReportDirectory = 'html-report';

export const siteDirectory = 'site';

export const apiDirectory = join(distDirectory, 'api');

export const apiThemeDirectory = join(siteDirectory, 'themes/dojo/source/_api-theme');

export const syncDirectory = '.sync';

export const tempDirectory = '.apitemp';

export const publishDirectory = '.ghpublish';

// This is considered the master branch as far as the CI is concerned
export const masterBranch = 'master';

// ---------------------------------------------------------------------------------------------------------------------
// Task Configuration
// ---------------------------------------------------------------------------------------------------------------------
export const api = {
	options: {
		dest: '<%= apiDirectory %>',
		filter: 'latest',
		format: 'html',
		typedoc: {
			mode: 'file',
			externalPattern: '**/+(example|examples|node_modules|tests|typings)/**/*.ts',
			excludeExternals: true,
			excludeNotExported: true,
			ignoreCompilerErrors: true,
			theme: '<%= apiThemeDirectory %>'
		}
	},

	cli: {
		options: {
			cloneDirectory: '<%= syncDirectory %>/cli',
			repo: 'dojo/cli'
		}
	},

	'cli-json': {
		options: {
			cloneDirectory: '<%= syncDirectory %>/cli',
			dest: '<%= apiDirectory %>/_json/cli.json',
			repo: 'dojo/cli',
			format: 'json'
		}
	},

	compose: {
		options: {
			repo: 'dojo/compose'
		}
	},

	core: {
		options: {
			repo: 'dojo/core'
		}
	},

	has: {
		options: {
			repo: 'dojo/has'
		}
	},

	interfaces: {
		options: {
			repo: 'dojo/interfaces'
		}
	},

	i18n: {
		options: {
			repo: 'dojo/i18n'
		}
	},

	loader: {
		options: {
			repo: 'dojo/loader'
		}
	},

	routing: {
		options: {
			repo: 'dojo/routing'
		}
	},

	shim: {
		options: {
			repo: 'dojo/shim'
		}
	},

	stores: {
		options: {
			repo: 'dojo/stores'
		}
	},

	streams: {
		options: {
			repo: 'dojo/streams'
		}
	},

	'widget-core': {
		options: {
			repo: 'dojo/widget-core'
		}
	},

	widgets: {
		options: {
			repo: 'dojo/widgets'
		}
	}
};

export const clean = {
	api: [ '<%= tempDirectory %>' ],
	build: [ '<%= buildDirectory %>'],
	dist: [ '<%= distDirectory %>' ],
	publish: [ '<%= publishDirectory %>' ],
	sync: [ '<%= syncDirectory %>' ],
	compiledFiles: [ './+(tests|support)/**/*.d.ts', './+(tests|support)/**/*.js' ],
	htmlReport: [ '<%= htmlReportDirectory %>' ]
};

export const hexo = {
	generate: {
		src: '<%= siteDirectory %>',
		dest: '<%= distDirectory %>'
	}
};

export const intern = {
	unit: {
		options: {
			runType: 'client',
			config: '_build/tests/intern',
			reporters: [
				'Console', 'LcovHtml'
			]
		}
	}
};

export const prompt = {
	github: {
		options: {
			questions: [
				{
					config: 'github.username',
					type: 'input',
					message: 'Github username'
				},
				{
					config: 'github.password',
					type: 'password',
					message: 'Github password'
				}
			]
		}
	}
};

export const publish = {
	'gh-pages': {
		options: {
			branch: 'gh-pages',
			cloneDirectory: '<%= distDirectory %>'
		}
	}
};

export const initAutomation = {
	repo: {
		options: {
			repoOwner: '<%= repoOwner %>',
			repoName: '<%= repoName %>'
		}
	}
};

export const shell = {
	'build-tests': {
		command: 'tsc',
		options: {
			execOptions: {
				cwd: 'tests'
			}
		}
	},
	'build-ts': {
		command: 'tsc',
		options: {
			execOptions: {
				cwd: 'support'
			}
		}
	}
};

export const sync = {
	'gh-pages': {
		options: {
			branch: 'gh-pages',
			cloneDirectory: '<%= distDirectory %>'
		}
	}
};

export const tslint = {
	options: {
		configuration: 'tslint.json'
	},
	support: 'support/**/*.ts',
	site: [ 'site/**/*.ts', '!site/node_modules/**' ]
};

export const tutorials = {
	'dojo2-tutorials': {
		src: 'site/source/tutorials',
		dest: '<%= distDirectory %>/tutorials/assets'
	}
};

export const copy = {
	'test-resources': {
		src: 'site/source/tutorials/003_creating_widgets/demo/finished/**/*.css',
		dest: '<%= buildDirectory %>/'
	}
};

/**
 * Host a local development server
 */
export const webserv: WebServerConfig = {
	server: {
		middleware
	}
};

export const postcss = {
	'tutorials': {
		files: [{
			expand: true,
			src: ['site/source/tutorials/003_creating_widgets/demo/finished/**/*.css'],
			dest: '<%= buildDirectory %>/'
		}],
			options: {
			processors: createProcessors(buildDirectory + '/')
		}
	}
};

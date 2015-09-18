module.exports = function(grunt) {

	grunt.config.set('wiredep', {
		app: {
			src: ['views/layout.ejs'],
			ignorePath:  '../assets',
		}
	});

	grunt.loadNpmTasks('grunt-wiredep');
};
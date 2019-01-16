module.exports = function(grunt) {

    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    //Initialize tasks
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        rootPath:   './',
        cssPath:    '<%= rootPath %>/styles/css/',
        scssPath:   '<%= rootPath %>/styles/scss/',

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd:    '<%= scssPath %>',
                    src:    [ 'styles.scss' ],
                    dest:   '<%= cssPath %>',
                    ext:    '.css'
                }]
            }
        }, // scss

        watch: {
            scss: {
                files:  [ '**/*.scss' ],
                tasks:  [ 'sass:dist' ],
                options:{ livereload: true }
            }
        }, // watch

        connect: {
            source: {
                options: {
                    port:       8080,
                    keepalive:  true,
                    base:       '<%= rootPath %>'
                }
            }
        } // server

    });

    grunt.registerTask( 'default', [ 'dev' ] );

    grunt.registerTask( 'sandbox', [ 'connect:source' ] );

    grunt.registerTask( 'dev', [ 'watch' ] );

};
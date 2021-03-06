/**
 * Created by GB115151 on 23/07/2016.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        env: {
            dev: {
                NODE_ENV: 'development'
            },
            test: {
                NODE_ENV: 'test'
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    ext: 'js,html',
                    watch: ['server.js', 'config/**/*.js', 'app/**/*.js']
                }
            }
        },
        mochaTest: {
            src: 'app/tests/**/*.js',
            options: {
                reporter: 'spec'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        jshint: {
            all: {
                src: ['server.js', 'config/**/*.js', 'app/**/*.js', 'public/js/*.js', 'public/modules/**/*.js']
            }
        },
        csslint: {
            all: {
                src: 'public/modules/**/*.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    grunt.registerTask('default', ['env:dev']);
    grunt.registerTask('test', ['env:test', 'mochaTest', 'karma']);
    grunt.registerTask('lint', ['jshint', 'csslint']);
};
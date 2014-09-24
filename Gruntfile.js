module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: 'src/**/*.scss',
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
            scripts : {
                files: 'src/**/*.js',
                tasks: ['jshint', 'uglify'],
                options: {
                    spawn: false,
                },
            },
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    loadPath: require('node-neat').includePaths,
                },
                files: {
                    'public/assets/css/style.css' : 'src/scss/style.scss',
                },
            },
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true,
                },
            },
        },
        uglify: {
            dist: {
                options: {
                    sourceMap: true,
                },
                src : 'src/**/*.js',
                dest : 'public/assets/js/scripts.js',
            },
        },
        browserSync: {
            bsFiles: {
                src : ['public/**/*.css', 'public/**/*.js', 'public/**/*.html'],
            },
            options: {
                server: {
                    baseDir: "./public",
                },
                // use proxy instead of server for apps
                // proxy: "local.dev",
                watchTask: true,
            }
        }
    });
    // grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ["sass", "uglify", "browserSync", "watch"]);
};

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            build: {
                files: 'src/**/*',
                tasks: ['sass', 'uglify'],
            },
            jekyll: {
                files: ['public/**/*'],
                tasks: ['exec:jekyll'],
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
        uglify: {
            dist: {
                options: {
                    sourceMap: true,
                },
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'public/assets/js'
                }]
            },
        },
        exec: {
            jekyll: 'jekyll build --source public --destination build',
        },
        browserSync: {
            build: {
                bsFiles: {
                    src: ['public/**/*.css', 'public/**/*.js', 'public/**/*.html'],
                },
                options: {
                    server: {
                        baseDir: "public",
                    },
                    // use proxy instead of server for apps
                    // proxy: "local.dev",
                    watchTask: true,
                    ghostMode: {
                        clicks: true,
                        scroll: true,
                        links: true,
                        forms: true,
                    },
                },
            },
            jekyll: {
                bsFiles: {
                    src: ['build/**/*.css', 'build/**/*.js', 'build/**/*.html'],
                },
                options: {
                    server: {
                        baseDir: "build",
                    },
                    watchTask: true,
                    ghostMode: {
                        clicks: true,
                        scroll: true,
                        links: true,
                        forms: true,
                    },
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ["sass", "uglify", "browserSync:build", "watch:build"]);
    grunt.registerTask('jekyll', ["sass", "uglify", "exec:jekyll", "browserSync:jekyll", "watch"]);
};

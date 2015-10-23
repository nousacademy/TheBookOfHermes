module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'hermeticSrc/theBookOfHermes.min.js': ['hermeticSrc/theBookOfHermes.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['grunt-contrib-uglify']);

}
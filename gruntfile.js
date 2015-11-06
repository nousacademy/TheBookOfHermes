module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'CorpusHermeticum/theBookOfHermes.min.js': ['CorpusHermeticum/theBookOfHermes.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['grunt-contrib-uglify']);

}
module.exports = function(config) {
    config.set({
    // The root path location that will be used to resolve all relative paths
    // defined in files and exclude
    basePath: '',
    // List of files or patterns to load in the browser
    files: [
<<<<<<< HEAD
        { pattern: 'src/**/*.js', included: false },
=======
        { pattern: 'js/**/*.js', included: false },
>>>>>>> b6750a580fd6de9caf38aec53f729bcc2cb52fad
        { pattern: 'tests/spec/**/*.js', included: false },
        'tests/test-main.js'
    ],
    // List of frameworks you want to use: jasmine, mocha, qunit
    frameworks: ['expect', 'mocha', 'requirejs'],
    // Enable or disable watching files and executing the tests
    // whenever one of these files changes.
    autoWatch: false,
    // Chrome (comes installed with Karma)
    // ChromeCanary (comes installed with Karma)
    // PhantomJS (comes installed with Karma)
    // Firefox (requires karma-firefox-launcher plugin)
    // Opera (requires karma-opera-launcher plugin)
    // Internet Explorer (requires karma-ie-launcher plugin)
    // Safari (requires karma-safari-launcher plugin)
    browsers: ['Chrome', 'PhantomJS', 'Firefox'],
    // If singleRun is set to true, Karma will start and capture all
    // configured browsers, run tests and then exit with an exit code of 0 or 1.
    singleRun: false
    });
};

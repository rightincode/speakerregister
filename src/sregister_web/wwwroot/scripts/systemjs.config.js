/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'scripts',
        '@angular': 'libs/node_modules/@angular',
        'angular-in-memory-web-api': 'libs/node_modules/angular-in-memory-web-api',
        'rxjs': 'libs/node_modules/rxjs',
        'moment': 'libs/node_modules/moment'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular-in-memory-web-api': { defaultExtension: 'js' },
        'moment': { defaultExtension: 'js'}
    };

    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'forms',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'router',
      'router-deprecated',
      'upgrade'
    ];

    // Add package entries for angular packages
    ngPackageNames.forEach(function (pkgName) {
        packages['@angular/' + pkgName] = { main: './bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(this);
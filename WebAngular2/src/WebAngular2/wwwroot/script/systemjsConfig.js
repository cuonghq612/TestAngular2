/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'script', // 'dist',
    '@angular': 'lib/@angular',
    'angular2-in-memory-web-api': 'lib/angular2-in-memory-web-api',
    'rxjs': 'lib/rxjs'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: './bootstrapper.js', defaultExtension: 'js'
  },
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: './bootstrapper.js', defaultExtension: 'js' },
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
    'upgrade',
  ];

  //// Add package entries for angular packages
  //ngPackageNames.forEach(function (pkgName) {
  //  packages['@angular/' + pkgName] = { main: "bundles/" + pkgName + '.umd.js', defaultExtension: 'js' };
  //});
  //var config = {
  //  map: map,
  //  packages: packages
  //}

  //System.config(config);

  //System.import('app').catch(function (err) { console.error(err); });

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: './bootstrapper.js', defaultExtension: 'js'
  };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
  System.import('app').catch(function (err) { console.error(err); });
})(this);
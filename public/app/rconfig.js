var require = {
  waitSeconds: 0,
  paths: {
  			'jquery': '../plugin/jquery/dist/jquery',
        'bootstrap': '../plugin/bootstrap/dist/js/bootstrap',
  			'angular': '../plugin/angular/angular.min',
        'angular-animate': '../plugin/angular-animate/angular-animate.min',
  			'angular-couch-potato': '../plugin/angular-couch-potato/dist/angular-couch-potato',
  			'angular-aria': '../plugin/angular-aria/angular-aria.min',
  			'angular-ui-router': '../plugin/angular-ui-router/release/angular-ui-router.min',
  			'domReady': '../plugin/requirejs-domready/domReady',
        'angular-cookies':'../plugin/angular-cookies/angular-cookies.min',
  			// app js file includes
        'appConfig': 'app.config',
        'modules-includes': 'includes'
  },
  shim: {
  	'angular': {'exports': 'angular', deps: ['jquery']},

  			'bootstrap': { deps: ['jquery']},
  			'angular-aria': {deps: ['angular']},
        'angular-animate': { deps: ['angular'] },
        'angular-ui-router': { deps: ['angular'] },
        'angular-couch-potato': { deps: ['angular'] },
        'angular-ui-router': { deps: ['angular'] },
        'angular-cookies': { deps: ['angular' ]}
  },
  priority: [
    'jquery',
    'bootstrap',
    'angular'
  ]
};

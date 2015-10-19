'use strict';
 
/**
 *
 * Frontend router
*/

angular.module('appRouter', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {  
        url: '/',
        templateUrl: 'views/templates/home.html'
      });
  }]);
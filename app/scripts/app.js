'use strict';

/**
 * @ngdoc overview
 * @name clientbiddingApp
 * @description
 * # clientbiddingApp
 *
 * Main module of the application.
 */
angular
  .module('clientbiddingApp', [
    'btford.socket-io',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'btford.socket-io'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var adminApp = angular.module('adminApp', ['ngRoute']);



adminApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'list.html',
        controller: 'AdminListCtrl'
      }).
      when('/edit/:lessonId', {
        templateUrl: 'edit.html',
        controller: 'EditPageCtrl'
      }).
      when('/create', {
        templateUrl: 'create.html',
        controller: 'CreatePageCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'EditPageCtrl'
      }).
      otherwise({
        redirectTo: 'edit.html',
    	controller : 'EditPageCtrl'
      });
  }]);

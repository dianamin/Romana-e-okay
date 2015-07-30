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
        otherwise({
            redirectTo: 'list.html',
            controller : 'AdminListCtrl'
        });
    }
]);

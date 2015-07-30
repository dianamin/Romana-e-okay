var adminApp = angular.module('adminApp', ['ngRoute']);



adminApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'panel.html',
            controller: 'AdminPanelCtrl'
        }).
        when('/lessons', {
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
            redirectTo: 'panel.html',
            controller: 'AdminPanelCtrl'
        });
    }
]);

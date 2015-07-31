/*
    Admin view initialization
*/


var adminApp = angular.module('adminApp', ['ngRoute']).filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

/*
    Admin app routing
*/

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
        when('/reports', {
            templateUrl: 'reports.html',
            controller: 'ReportedEssaysCtrl'
        }).
        when('/symbols', {
            templateUrl: 'symbols.html',
            controller: 'SymbolsCtrl'
        }).
        when('/questions', {
            templateUrl: 'questions.html',
            controller: 'QuestionsCtrl'
        }).
        otherwise({
            redirectTo: 'panel.html',
            controller: 'AdminPanelCtrl'
        });
    }
]);

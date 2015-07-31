/*
    Romana-e-okay public app initialization.
*/

var app = angular.module('app', ['ui.sortable', 'ui.bootstrap']).filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

app.filter('array', function() {
    return function(items) {
        var filtered = [];
        angular.forEach(items, function(item) {
        filtered.push(item);
        });
        return filtered;
    };
});
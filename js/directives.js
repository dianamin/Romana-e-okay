/*
	Contains directives
*/

app.directive('backImg', function(){
	//sets backrgound image
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
})

app.directive('ngInclude', [
    function () {
        return {
            replace: true,
            link: function (scope, element, attrs) {
            }
        }
    }
])
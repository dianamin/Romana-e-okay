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

/* http://jsfiddle.net/sebmade/swfjT/light/ */
app.directive('suggestions', function($timeout) {
    return function(scope, iElement, iAttrs) {
            iElement.autocomplete({
                source: scope[iAttrs.uiItems],
                select: function() {
                    $timeout(function() {
                     	iElement.trigger('input');
                    }, 0);
                }
            });
    };
});
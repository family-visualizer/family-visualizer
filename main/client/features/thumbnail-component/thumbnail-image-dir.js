angular.module('app').directive('backImg', function() {
    return function(scope, element, attrs) {
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url + ')',
            'background-size': 'cover',
            'width': '320px',
            'height': '180px',
            'display': 'inline-block',
			'margin-top': '10px'
        });
    }
});

angular.module('app').directive('backImg', function() {
  return function(scope, element, attrs) {
	  console.log("this is attrs.backImg");
    var url = attrs.backImg;
    element.css({
        'background-image': 'url('+ url + ')'
      , 'background-size': 'cover'
      , 'width': '400px'
      , 'height': '300px'
      , 'display': 'inline-block'
    });
  };
});

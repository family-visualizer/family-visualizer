angular.module('app').directive('test', function() {
  return function(scope, element, attrs) {
	  console.log("this is attrs.backImgSmall", attrs.test);
    var url = attrs.test;
    element.css({
      'background-image': 'url('+ url + ')',
      'background-size': 'cover',
      'width': '200px',
      'height': '150px',
      'display': 'inline-block'
    });
  };
});

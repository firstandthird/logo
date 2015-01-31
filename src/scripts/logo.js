angular.module('logo', [
  'yamldata'
])
.directive('css', function() {
  return {
    scope: {
      value: '=cssValue',
      css: '='
    },
    link: function($scope, el, attrs) {
      $scope.$watch('value', function(val) {
        el.css($scope.css, val);
      });
    }
  };
})
.directive('bgColor', function() {
})
.controller('ColorizerController', function($scope, COLORS) {
  $scope.mark = 'both';
  $scope.colorOptions = COLORS;

  $scope.setColors = function(colors) {
    $scope.primaryColor = colors[0];
    $scope.secondaryColor = colors[1];
    $scope.backgroundColor = colors[2];
  };
  $scope.setColors($scope.colorOptions[0]);
});

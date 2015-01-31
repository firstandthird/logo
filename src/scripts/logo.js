angular.module('logo', [
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
.controller('ColorizerController', function($scope) {
  $scope.primaryColor = '#C0392B';
  $scope.secondaryColor = '#444444';
  $scope.backgroundColor = '#ffffff';
});

angular.module('logo', [
  'yamldata',
  'ngStorage'
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
.controller('ColorizerController', function($scope, COLORS, $localStorage, $location, $timeout) {
  $scope.mark = 'both';
  var throttleTimeout = null;
  var storedColors = $localStorage.colors || [];

  $scope.colorOptions = COLORS.concat(storedColors);

  $scope.setColors = function(colors) {
    $scope.primaryColor = colors[0];
    $scope.secondaryColor = colors[1];
    $scope.backgroundColor = colors[2];
  };
  var urlParams = $location.search();
  var urlColor = urlParams.colors;
  if (urlColor) {
    $scope.setColors(urlColor.split('_'));
  } else {
    $scope.setColors($scope.colorOptions[0]);
  }

  $scope.$watchGroup(['primaryColor', 'secondaryColor', 'backgroundColor'], function(newValues, oldValues) {
    if (throttleTimeout) {
      $timeout.cancel(throttleTimeout);
    }
    throttleTimeout = $timeout(function() {
      $location.search('colors', newValues.join('_'));
    }, 500);
  });

  $scope.save = function() {
    var color = [$scope.primaryColor, $scope.secondaryColor, $scope.backgroundColor];
    storedColors.push(color);
    $scope.colorOptions.push(color);
    $localStorage.colors = storedColors;
  };
});

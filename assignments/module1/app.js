angular.module('module1', []).controller('MyCtrl', function($scope) {
    $scope.items = "",
    $scope.statusMsg = "",

    $scope.checkIfTooMuch = function() {
      if($scope.items) {
        if($scope.items.split(',').length > 3) {
          $scope.statusMsg = "Too much!";
        } else {
          $scope.statusMsg = "Enjoy!";
        }
      } else {
        $scope.statusMsg = "Please enter data first";
      }
    }
});

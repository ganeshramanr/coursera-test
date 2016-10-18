(function (){
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
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
}

})();

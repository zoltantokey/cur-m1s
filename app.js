(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu = '';
$scope.msg ="";
$scope.mystyle = ""

  $scope.cnt = function () {
    $scope.msg ="";
    //$scope.menu = $scope.menu.replace(/,+/g,',');
    var arrayOfStrings = $scope.menu.split(',');
    if ($scope.menu.length == 0){$scope.msg = 'Please enter data first';$scope.mystyle={color:"Red"}}
    else if(arrayOfStrings.length > 3) {$scope.msg = 'Too mutch!'; $scope.mystyle={color:"green"}}
    else  {$scope.msg = 'Enjoy!';$scope.mystyle={color:"green"}}

    ;
    //$scope.msg = $scope.menu;
  };

}
})();

angular.module('MyCar')

.controller('resultControl',function ($scope,$state,$stateParams) {
  console.log("resultControl start");

  $scope.txt_down_bath = $stateParams.txt_down_bath;
  $scope.txt_down_percent = $stateParams.txt_down_percent;
  $scope.txt_total = $stateParams.txt_total;
  $scope.txt_pay = $stateParams.txt_pay;

})

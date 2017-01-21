angular.module('MyCar')

.controller('resultControl',function ($scope,$state,$stateParams) {
  console.log("resultControl start");

  $scope.txt_down_baht = $stateParams.txt_down_baht;
  $scope.txt_down_percent = $stateParams.txt_down_percent;
  $scope.txt_total_month = $stateParams.txt_total_month;
  $scope.txt_pay_permonth = $stateParams.txt_pay_permonth;

  $scope.btn_back = function () {
    console.log("back press");
    $state.go('login');
  }

  $scope.btn_exit = function () {
    console.log("exit press");
    $state.go('login');
  }

  $scope.btn_recal = function () {
    console.log("recal press");
    $state.go('cal');
  }

  $scope.btn_history = function () {
    console.log("history press");
    //$state.go('history');
  }

})

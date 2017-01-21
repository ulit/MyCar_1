angular.module('MyCar')

.controller('calController',function($scope,$state,$http){
  console.log("Cal controller is running...");

  $scope.form={};

  $scope.btn_exit = function () {
    console.log("exit press");
    $state.go('login');
  }

  $scope.btn_back = function () {
    console.log("back press");
    $state.go('login');
  }

  $scope.btnCal=function(record){
  	var price=$scope.form.price;
  	var downPay=$scope.form.downPay;
  	var totalMonth=$scope.form.totalMonth;
  	var interest=$scope.form.interest;


  	console.log(price);
  	console.log(downPay);
  	console.log(totalMonth);
  	console.log(interest);

  	//==============Calculate===========================
  	var netPrice=price-downPay;
  	var totalPay=(((netPrice*3)/100)*totalMonth)+netPrice;
  	var payPerMonth=totalPay/totalMonth;
  	var downPercent=(netPrice*100)/price;

  	//alert(downPercent);

  	$state.go('result',{txt_down_baht:downPay,txt_down_percent:downPercent,txt_total_month:totalMonth,txt_pay_permonth:payPerMonth});
  	//console.log(record);
  }
})

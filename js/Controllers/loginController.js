angular.module('MyCar')

  .controller('loginControl',function ($scope,$state,$http) {
    console.log("loginControl start");

    $scope.form = {};

    $scope.btn_login = function () {
      console.log("login press");
      console.log($scope.form.txt_user);
      console.log($scope.form.txt_pwd);

      $http(
        {
          url:'http://senchabox.com/ionic/www_salecar/webservice/ws_login.php?var_user=' +
          $scope.form.txt_user + '&var_pwd=' + $scope.form.txt_pwd,
        }
      ).then(function (response) {
          console.log(response);
          if (response.data.results == 'success_login') {
            console.log('login success');
            $state.go('cal');
          }
        },function (error) {
          console.log(error);
        });
    }
  })

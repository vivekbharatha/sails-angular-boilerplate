'use strict';

angular.module('yourApp')
  .controller('HomeController', function ($scope, ClockService) {
    $scope.geek = 'Geeky Buddy!';
    $scope.time = '';

    setInterval(function(){
      var Obj = ClockService.getTime();

      $scope.time = Obj.time;
      $scope.$apply();
      console.log(Obj.time);
      document.body.style.background = Obj.color;
    }, 1000);
  });

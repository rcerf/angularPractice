angular.module("myApp", [])
.controller('MyController',
 function($scope){
   $scope.clock = {
     now: new Date()
 };
 var updateClock = function(){
   $scope.clock.now = new Date();
 }
 setInterval(function(){
   $scope.$apply(updateClock);
 }, 1000);
 updateClock();
 })
 .controller('FirstController', function($scope){
   $scope.counter = 0;
   $scope.add = function(amount){
     $scope.counter += amount;
   };
   $scope.subtract = function(amount){
     $scope.counter -= amount;
   };
 });

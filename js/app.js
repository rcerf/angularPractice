angular.module("myApp", [])
.controller('MyController',
 function mycontroller($scope){
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
 });

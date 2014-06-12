angular.module("myApp", [])
.controller('MyController', function($scope){
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
})

.controller('SecondController', function($scope){
  $scope.person = {
    name: "Rick Cerf"
  };
})

.controller('ParentController', function($scope){
  $scope.person = {greeted: false};
})

.controller('ChildController', function($scope){
  $scope.sayHello = function(){
    this.person.name = "Rick Cerf";
    $scope.person.greeted = true;
  }
})

.controller('ParseController', function($scope, $parse){
  $scope.$watch('expr', function(newVal, oldVal, scope){
    if (newVal !== oldVal) {
      var parseFun = $parse(newVal);
      $scope.parsedValue = parseFun(scope);
    }
  })
})

.controller('StringController', function($scope, $interpolate) {
  $scope.$watch('emailBody', function(body){
    if(body){
      var template = $interpolate(body);
      $scope.previewText = template({to: $scope.to});
    }
  })
});

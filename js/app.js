angular.module('emailParser', [])
.config(['$interpolateProvider', function ($interpolateProvider) {
  $interpolateProvider.startSymbol('__');
  $interpolateProvider.endSymbol('__');
}])
.factory('EmailParser', ['$interpolate', function ($interpolate) {
  return {
    parse: function(text, context) {
      var template = $interpolate(text);
      return template(context);
    }
  }
}]);

angular.module('myApp', ['emailParser'])
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
    console.log(this);
    this.person.name = "Rick Cerf";
    $scope.person.greeted = true;
  }
<<<<<<< HEAD
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
})

.controller('CustomStringController', ['$scope', 'EmailParser',
  function ($scope, EmailParser) {
    $scope.$watch('emailBody', function (body) {
      if (body){
        $scope.previewText = EmailParser.parse(body, {
          to: $scope.to
        });
      }
    })
}])

.controller('DemoController', ['$scope', '$filter',
  function($scope, $filter){
    $scope.name = $filter('lowercase')('Rick');
}]);

=======
});
>>>>>>> parent of 6654470... string interpolation

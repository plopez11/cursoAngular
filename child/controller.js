angular.module("MyfirstApp",[])
.run(function($rootScope){
    $rootScope.nombre="codigo facilito";
})
.controller("FirstController",function($scope){
    $scope.nombre="CF";
    setTimeout(function(){
        $scope.$apply(function(){
            $scope.nombre=":3";
    });
    },1000);
})
.controller("ChildController",function($scope){
    $scope.nombre="CF2"
});

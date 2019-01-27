angular.module("CustomDirective",[])
.directive('backImg', function(){
    return function(scope,element,attrs){

        attrs.$observe('backImg',function(value){
            element.css({
                "background": "url("+value+")",
                "background-size": "cover",
                "background-position": "center"
            });
        });
    }
})
.controller("AppCtrl",function($scope,$http){
    $http.get("https://api.github.com/users/plopez11/repos")    
    .success(function(data){
        $scope.repos=data;
    })
    .error(function(err){
        console.log(err);
    });
});
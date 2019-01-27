angular.module("myfirstApp",[])
.controller("firstController",function($scope,$http){
    $scope.posts=[];
    $scope.newPost={};
    $scope.loading=true;
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .success(function(data){
        console.log(data);
        $scope.posts=data;
        $scope.loading=false;
    })
    .error(function(err){
        $scope.loading=false;
    });
    $scope.addPost=function(){
        $http.post("https://jsonplaceholder.typicode.com/posts",{
            title: $scope.newPost.title,
            body: $scope.newPost.body,
            userId:1
        })
        .success(function(data,status,headers,config){
            $scope.posts.push($scope.newPost);
            $scope.newPost={};

        })
        .error(function(data,status,headers,config){
            console.log(error);
        });
    }
});

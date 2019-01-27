angular.module("ToDoList",["LocalStorageModule"])
.service("toDoService",function(localStorageService){
    
    this.key="angular-todolist"

    if (localStorageService.get(this.key)) {         
        this.activities=localStorageService.get(this.key);
    }
    else
    {
        this.activities=[];
    }


    this.add=function(newActv){
        this.activities.push(newActv);
        this.updaLocalStorage();
    };

    this.updaLocalStorage=function(){
        localStorageService.set(this.key,this.activities);
    };
    this.clean=function(){
        this.activities=[];  
        this.updaLocalStorage();
        return this.getAll();
    };
    this.getAll=function(){
        return this.activities;
    };
    this.removeItem=function(item){
        this.activities=this.activities.filter(function(activty){
            return activty!=item;
        });
        this.updaLocalStorage();
        return this.getAll();
    }
    
})
.controller("ToDoController",function($scope,toDoService){
    $scope.todo=toDoService.getAll();
    $scope.newActv={};
    $scope.addActv=function(){
        toDoService.add($scope.newActv);
        $scope.newActv={};
    }   
    $scope.removeActv=function(item){   
        $scope.todo=toDoService.removeItem(item);
    } 
   $scope.clean=function(){
        $scope.todo=toDoService.clean();
   }
});
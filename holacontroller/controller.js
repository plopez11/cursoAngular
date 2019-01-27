angular.module("myfirstApp",[])
.controller("firstController",function($scope){
    $scope.nombre = "Pedro";
    $scope.nuevoComentario={};
    $scope.comentarios = [
        {
            comentario: "comentario nro 1",
            username: "plopez1"
        },
        {
            comentario: "comentario nro 2",
            username: "plopez2"
        }
    ];
    $scope.agregarComentario=function(){
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario={};
    }
});

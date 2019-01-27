angular.module("mainModule",[])
.filter("removehtml",function(){
    return function(texto){
        return String(texto).replace(/<[^>]+>/gm,'');
    }
})
.controller("filtersController", function($scope){
    $scope.mi_json={};
    $scope.mi_json.title="hola";
    $scope.mi_json.body="hola mundo";
    $scope.costo=299;
    $scope.mi_html="<p>prueba de filter</p>";
});
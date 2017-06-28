/**
 * Created by Bogdan.Barbu on 6/28/2017.
 */
angular.module('hrApp').controller('OtherController',['$rootScope','$scope',function($rootScope,$scope){
    $scope.someValue="someValue";
    console.log($scope.someValue);

    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };


$scope.setTitle = function(){
$scope.title = "aaaa";

}
}]);
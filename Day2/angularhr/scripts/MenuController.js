angular.module('hrApp').controller('MenuController',['$rootScope','$scope',function($rootScope,$scope){
    $scope.demoActionList=[
        {
            label:"OtherScope",
            url:"childscope.html"
        },  {
            label:"DemoAction",
            url:"demomath.html"
        }
    ];

    $scope.Add = function(){
    $scope.result = $scope.nra + $scope.nrb;
}
    $scope.Sub = function(){
        $scope.result = $scope.nra - $scope.nrb;
    }
    $scope.Mul = function(){
        $scope.result = $scope.nra * $scope.nrb;
    }

    $scope.Div = function(){
        $scope.result = $scope.nra / $scope.nrb;
    }

}


]);
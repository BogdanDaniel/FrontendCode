/**
 * Created by Bogdan.Barbu on 6/28/2017.
 */
angular.module('hrApp').controller('MenuController',['$rootScope','$scope',function($rootScope,$scope){
    $scope.ImageList=[
        {
            label:"../images/a.jpg",
            price:"200"

        },  {
            label:"../images/b.jpg",
            price:"450"

        }, {
            label:"../images/c.jpg",
            price:"200"

        },{
            label:"../images/d.jpg",
            price:"400"

        }
    ];
    $scope.pret = function(value){
        console.log($scope.ImageList[value].price);
        $scope.ImageList[value].showPrice = true;
        return $scope.ImageList[value].price;

    }
    $scope.pret2 = function(value){
        $scope.ImageList[value].showPrice = false;
    }
    }




]);
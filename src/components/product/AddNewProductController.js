"use strict";

angular.module("project3App").controller("AddNewProductController",
function AddNewProductController($scope, $location, $routeParams,AppResource) {
	
	var product_obj;
	$scope.addproduct = function addproduct(){
		product_obj = {
			name: $scope.productName,
			price: $scope.price,
			quantitySold: $scope.quantitySold,
			quantityInStock: $scope.quantityInStock,
			imagePath: $scope.imagePath
		};
		AppResource.addSellerProduct($location.sellerid, product_obj).success(function(product){
			console.log("success");
		});
	};
	$scope.back = function back(){
		$location.path("/seller/" + $routeParams.sellerid);
	};
});
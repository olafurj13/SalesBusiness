"use strict";

angular.module("project3App").controller("EditProductController",
function EditProductController($scope, $location, $routeParams, AppResource) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	console.log($routeParams.id);
	console.log("EditProductController");
	$scope.products = "";
	var p = [];
	var getSellerProductPromise = AppResource.getSellerProducts($routeParams.sellerid);
	getSellerProductPromise.success(function(products){
		p = products[$routeParams.id-1];
		$scope.products = p;
		console.log("----Inn í products-----", $scope.products);
		console.log("product ", products);
			
		
	});
	
	$scope.editProduct = function editProduct(){
		console.log($scope.products);
		AppResource.updateProduct($scope.products.id, $scope.products).success(function(p){
			console.log("success");
		});
	};
	$scope.back = function back(){
		$location.path("/seller/" + $routeParams.sellerid);
	};	
});
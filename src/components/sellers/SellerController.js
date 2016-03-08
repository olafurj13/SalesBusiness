"use strict";

angular.module("project3App").controller("SellerController",
function SellerController($scope, $location, $routeParams, AppResource) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	console.log($routeParams.id);
	$scope.seller = "";
	$scope.products = "";
	//console.log(typeof($routeParams.id));	
	var getSellerDetailsPromise = AppResource.getSellerDetails($routeParams.id);
	getSellerDetailsPromise.success(function(seller){
		console.log(seller);
		$scope.seller = seller;
	});

	var getSellerProductPromise = AppResource.getSellerProducts($routeParams.id);
	getSellerProductPromise.success(function(products){
		console.log("product ", products);
		$scope.products = products;
	});
	console.log("SellerID", $routeParams.id);
	$scope.editSeller = function editSeller(){
		$location.path("/seller/edit/" + $routeParams.id);
	};

	$scope.back = function back(){
		$location.path("/");
	};
	$scope.Imagechange = function(id){
		$location.path("/seller/" + $routeParams.id + "/product/" + id);
	};
	$scope.addProduct = function addProduct(){
		console.log("ADDAPRODUCT");
		$location.path("/seller/" + $routeParams.id + "/addproduct");
	};

});
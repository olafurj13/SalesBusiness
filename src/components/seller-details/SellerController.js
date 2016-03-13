"use strict";

angular.module("project3App").controller("SellerController",
function SellerController($scope, $location, $routeParams, AppResource) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.seller = "";
	$scope.products = "";
	var sortProductSold = [];
	var getSellerDetailsPromise = AppResource.getSellerDetails($routeParams.id);
	getSellerDetailsPromise.success(function(seller){
		console.log(seller);
		$scope.seller = seller;
	});

	var getSellerProductPromise = AppResource.getSellerProducts($routeParams.id);
	getSellerProductPromise.success(function(products){
		console.log("product ", products);
		$scope.products = products;
		sortProductSold = products;
	});

	$scope.editSeller = function editSeller(){
		$location.path("/seller/edit/" + $routeParams.id);
	};

	sortProductSold = _.sortBy(sortProductSold, "quantitySold").reverse();
	$scope.sortedProducts = _.take(sortProductSold, 10);

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

}).directive("myCustomer", function() {
	return {
		templateUrl: 'src/components/seller-details/my-customer.html'
	};
});
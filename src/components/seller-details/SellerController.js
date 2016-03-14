"use strict";

angular.module("project3App").controller("SellerController",
function SellerController($scope, $location, $routeParams, AppResource) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.seller = "";
	$scope.products = "";
	var sortProductSold = [];
	var p = "";
	var getSellerDetailsPromise = AppResource.getSellerDetails($routeParams.id);
	getSellerDetailsPromise.success(function(seller){
		$scope.seller = seller;
	});

	var getSellerProductPromise = AppResource.getSellerProducts($routeParams.id);
	getSellerProductPromise.success(function(products){
		p = products;
		sortProductSold = products;
	});

	for(var i = 0; i < p.length; i++){
		if(p[i].imagePath === ""){
			p[i].imagePath = "http://www.cib.na.cnr.it/wp-content/uploads/2014/12/no-image.png";
		}
	}

	$scope.products = p;

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
		$location.path("/seller/" + $routeParams.id + "/addproduct");
	};

});
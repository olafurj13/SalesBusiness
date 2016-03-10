"use strict";

angular.module("project3App").controller("AddNewProductController",
function AddNewProductController($scope, $location, $routeParams,AppResource, centrisNotify) {
	
	var product_obj;
	console.log($routeParams.sellerid);
	var sellerid = $routeParams.sellerid;

	$scope.addProduct = function addproduct(){
		console.log("product added");
		product_obj = {
			name: $scope.productName,
			price: $scope.price,
			quantitySold: $scope.quantitySold,
			quantityInStock: $scope.quantityInStock,
			imagePath: $scope.imagePath
		};
		if(product_obj.name === ""){
			centrisNotify.error("product.Messages.MissingAName", "æjæj");
		} else if(product_obj.price === ""){
			centrisNotify.error("product.Messages.MissingAPrice");
		}else if(product_obj.quantitySold === ""){
			centrisNotify.error("product.Messages.MissingAQuantatySold");
		}else if(product_obj.quantityInStock === ""){
			centrisNotify.error("product.Messages.MissingAQuantityInStock");
		} else if(product_obj.imagePath === ""){
			centrisNotify.error("product.Messages.MissingAImage");
		} else {
			AppResource.addSellerProduct(sellerid, product_obj).success(function(product){
				centrisNotify.success("Success","success");
				$location.path("/seller/" + $routeParams.sellerid);
				console.log("success");
			});
		}
	};
	$scope.back = function back(){
		$location.path("/seller/" + $routeParams.sellerid);
	};
});
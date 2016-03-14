"use strict";

angular.module("project3App").controller("AddNewProductController",
function AddNewProductController($scope, $location, $routeParams,AppResource, centrisNotify) {
	
	var product_obj;
	var sellerid = $routeParams.sellerid;

	$scope.addProduct = function addproduct(){
		product_obj = {
			name: $scope.productName,
			price: $scope.price,
			quantitySold: $scope.quantitySold,
			quantityInStock: $scope.quantityInStock,
			imagePath: $scope.imagePath
		};
		console.log(product_obj);
		if(typeof product_obj.name === "undefined"){
			centrisNotify.error("product.Messages.MissingAName");
		} else if(typeof product_obj.price === "undefined"){
			centrisNotify.error("product.Messages.MissingAPrice");
		}else if(typeof product_obj.quantitySold === "undefined"){
			centrisNotify.error("product.Messages.MissingAQuantatySold");
		}else if(typeof product_obj.quantityInStock === "undefined"){
			centrisNotify.error("product.Messages.MissingAQuantityInStock");
		} else if(typeof product_obj.imagePath === "undefined"){
			centrisNotify.error("product.Messages.MissingAImage");
		} else {
			AppResource.addSellerProduct(sellerid, product_obj).success(function(product){
				centrisNotify.success("product.Messages.SuccessA");
				$location.path("/seller/" + sellerid);
			}).error(function (){
				centrisNotify.error("product.Error");
			});
		}
	};
	$scope.back = function back(){
		$location.path("/seller/" + sellerid);
	
	};
});
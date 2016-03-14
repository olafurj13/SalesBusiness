"use strict";

angular.module("project3App").controller("EditProductController",
function EditProductController($scope, $location, $routeParams, AppResource, centrisNotify) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	var productID = $routeParams.id;
	
	var getSellerProductPromise = AppResource.getSellerProducts($routeParams.sellerid);
	getSellerProductPromise.success(function(products){
		var p = _.find(products, function(o){ return parseInt(o.id) === parseInt(productID);});
		$scope.products = p;
	});
	
	$scope.editProduct = function editProduct(){
		if($scope.products.name === ""){
			centrisNotify.error("product.Messages.MissingEName");
		} else if($scope.products.price === ""){
			centrisNotify.error("product.Messages.MissingEPrice");
		}else if($scope.products.quantitySold === ""){
			centrisNotify.error("product.Messages.MissingEQuantatySold");
		}else if($scope.products.quantityInStock === ""){
			centrisNotify.error("product.Messages.MissingEQuantityInStock");
		} else if($scope.products.imagePath === ""){
			centrisNotify.error("product.Messages.MissingEImage");
		} else {
			AppResource.updateProduct($scope.products.id, $scope.products).success(function(p){
				centrisNotify.success("product.Messages.SuccessE");
				$location.path("/seller/" + $routeParams.sellerid);
			}).error(function (){
				centrisNotify.error("product.Error");
			});
		}
	};
	$scope.back = function back(){
		$location.path("/seller/" + $routeParams.sellerid);
	};
});
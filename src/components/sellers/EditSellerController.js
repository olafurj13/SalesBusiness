"use strict";

angular.module("project3App").controller("EditSellerController",
function EditSellerController($scope, $location, $routeParams, AppResource) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	console.log($routeParams.id);
	$scope.seller = "";
	//console.log(typeof($routeParams.id));	
	var getSellerDetailsPromise = AppResource.getSellerDetails($routeParams.id);
	getSellerDetailsPromise.success(function(seller){
		console.log(seller);
		$scope.seller = seller;
	});
	$scope.editSeller = function editSeller(){
		console.log($scope.seller);
		AppResource.updateSeller($scope.seller.id, $scope.seller).success(function(seller){
			console.log("success");
		});
	};

	$scope.back = function back(){
		$location.path("/seller/" + $routeParams.id);
	};	
});
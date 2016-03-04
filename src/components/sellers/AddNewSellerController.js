"use strict";

angular.module("project3App").controller("AddNewSellerController",
function AddNewSellerController($scope, $location, AppResource) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	var seller_obj;
	$scope.addSeller = function addSeller(){
		seller_obj = {
			id: $scope.id,
			name : $scope.name,
			category: $scope.category,
			imagePath: $scope.imagePath
		};
		AppResource.addSeller(seller_obj).success(function(seller){
			console.log("success");
		});
	};
	$scope.back = function back(){
		$location.path("/");
	};
});
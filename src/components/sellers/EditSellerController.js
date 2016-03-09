"use strict";

angular.module("project3App").controller("EditSellerController",
function EditSellerController($scope, $location, $routeParams, AppResource, centrisNotify) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	console.log($routeParams.id);
	$scope.seller = "";
	var updatedSeller_obj = "";
	//console.log(typeof($routeParams.id));	
	var getSellerDetailsPromise = AppResource.getSellerDetails($routeParams.id);
	getSellerDetailsPromise.success(function(seller){
		console.log(seller);
		$scope.seller = seller;
	});

	$scope.editSeller = function editSeller(){
		updatedSeller_obj = {
			name: $scope.seller.name,
			category: $scope.seller.category,
			imagePath: $scope.seller.imagePath
		};
		console.log(updatedSeller_obj);
		console.log(typeof updatedSeller_obj.name);
		if(updatedSeller_obj.name === ""){
			centrisNotify.error("sellers.Messages.LoadFailed");
		} else if(updatedSeller_obj.category === ""){
			centrisNotify.error("category");
		} else if(updatedSeller_obj.imagePath === ""){
			centrisNotify.error("imagePath");
		} else {
			console.log("else");
			AppResource.updateSeller($scope.seller.id, updatedSeller_obj).success(function(seller){
				centrisNotify.success("successfully edited");
			});
		}

	};

	$scope.back = function back(){
		$location.path("/seller/" + $routeParams.id);
	};	
});
"use strict";

angular.module("project3App").controller("AddNewSellerController",
function AddNewSellerController($scope, $location, AppResource, centrisNotify) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	var seller_obj;
	var sellersArray = "";
	$scope.showError = false;
	$scope.doFade = false;
	$scope.errorMessage = "";
	var getSellersPromise = AppResource.getSellers();
	getSellersPromise.success(function(sellers){
		sellersArray = sellers;
	});

	$scope.addSeller = function addSeller(){
		$scope.showError = false;
		$scope.doFade = false;
		$scope.showError = true;
		seller_obj = {
			name : $scope.name,
			category: $scope.category,
			imagePath: $scope.imagePath
		};
		if(typeof seller_obj.name === 'undefined'){
			centrisNotify.error("sellers.Messages.LoadFailed");
		} else if(typeof seller_obj.category === 'undefined'){
			centrisNotify.error("category");
		} else if(typeof seller_obj.imagePath === 'undefined'){
			centrisNotify.error("imagePath");
		} else {
			AppResource.addSeller(seller_obj).success(function(seller){
				console.log("success");
				centrisNotify.success("Success","success");
			}).error(function (){
				centrisNotify.error();
			});
		}
	};
	$scope.back = function back(){
		$location.path("/");
	};
});
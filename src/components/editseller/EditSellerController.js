"use strict";

angular.module("project3App").controller("EditSellerController",
function EditSellerController($scope, $location, $routeParams, AppResource, centrisNotify) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.seller = "";
	var updatedSeller_obj = "";
	var getSellerDetailsPromise = AppResource.getSellerDetails($routeParams.id);
	getSellerDetailsPromise.success(function(seller){
		$scope.seller = seller;
	});

	$scope.editSeller = function editSeller(){
		updatedSeller_obj = {
			name: $scope.seller.name,
			category: $scope.seller.category,
			imagePath: $scope.seller.imagePath
		};
		if(updatedSeller_obj.name === ""){
			centrisNotify.error("editseller.Messages.MissingName");
		} else if(updatedSeller_obj.category === ""){
			centrisNotify.error("editseller.Messages.MissingCategory");
		} else if(updatedSeller_obj.imagePath === ""){
			centrisNotify.error("editseller.Messages.MissingImage");
		} else {
			AppResource.updateSeller($scope.seller.id, updatedSeller_obj).success(function(seller){
				centrisNotify.success("editseller.Messages.Success");
				$location.path("/seller/"+ parseInt($routeParams.id, 10));
			});
		}
	};
	$scope.back = function back(){
		$location.path("/seller/" + $routeParams.id);
	};	
});
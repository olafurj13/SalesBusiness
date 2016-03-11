"use strict";

angular.module("project3App").controller("AddNewSellerController",
function AddNewSellerController($scope, $location, AppResource, centrisNotify) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	var seller_obj;
	$scope.addSeller = function addSeller(){
		seller_obj = {
			name : $scope.name,
			category: $scope.category,
			imagePath: $scope.imagePath
		};
		if(typeof seller_obj.name === 'undefined'){
			centrisNotify.error("addseller.Messages.MissingName");
		} else if(typeof seller_obj.category === 'undefined'){
			centrisNotify.error("addseller.Messages.MissingCategory");
		} else if(typeof seller_obj.imagePath === 'undefined'){
			centrisNotify.error("imagePath");
		} else {
			AppResource.addSeller(seller_obj).success(function(seller){
				console.log("success");
				centrisNotify.success("addseller.Messages.Success");
				$location.path("/");
			}).error(function (){
				centrisNotify.error();
			});
		}
	};
	$scope.back = function back(){
		$location.path("/");
	};
});
"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location) {

	var getSellersPromise = AppResource.getSellers();
	getSellersPromise.success(function(sellers){
		console.log(sellers);
		$scope.sellers = sellers;
	});

	$scope.addSeller = function addSeller(path){
		console.log('addSeller button');
		$location.path(path);
	};
	

});

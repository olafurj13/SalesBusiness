"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	var getSellersPromise = AppResource.getSellers();
	getSellersPromise.success(function(sellers){
		$scope.sellers = sellers;
	});

	$scope.addSeller = function addSeller(path){
		console.log('addSeller button');
		$location.path(path);
	};
	

});
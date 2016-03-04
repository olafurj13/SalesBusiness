"use strict";

angular.module("project3App").controller("ProductController",
function SellersController($scope, AppResource, $location) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	var getSellersPromise = AppResource.getSellers();
	getSellersPromise.success(function(sellers){
		$scope.sellers = sellers;
	});
});
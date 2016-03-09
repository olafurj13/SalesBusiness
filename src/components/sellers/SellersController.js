"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

	//$translateProvider.useStaticFilesLoader({
	//	prefix : "lang_",
	//	suffix: ".json"
	//});

	//$translateProvider.use("is");

	var getSellersPromise = AppResource.getSellers();
	getSellersPromise.success(function(sellers){
		console.log(sellers);
		$scope.sellers = sellers;
	});

	

	$scope.head = {
        a: "Nafn Seljanda",
        b: "Flokkur"
    };
	$scope.addSeller = function addSeller(path){
		console.log('addSeller button');
		$location.path(path);
	};
	

});



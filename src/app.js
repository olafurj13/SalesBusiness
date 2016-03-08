"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	}).when("/seller/", {
		controller: "AddNewSellerController",
		templateUrl: "components/sellers/addseller.html"
	}).when("/seller/:id", {
		controller: "SellerController",
		templateUrl: "components/sellers/seller.html"
	}).when("/seller/edit/:id", {
		controller: "EditSellerController",
		templateUrl: "components/sellers/editseller.html"
	});


	//$translateProvider.useStaticFilesLoader({
	//	prefix : "lang_",
	//	suffix: ".json"
	//});

	//$translateProvider.use("is");


	$translateProvider.preferredLanguage('en');

});

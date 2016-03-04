"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices"])
.config(function ($routeProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	}).when("/seller/", {
		controller: "AddNewSellerController",
		templateUrl: "components/sellers/addseller.html"
	}).when("/seller/:id", {
		controller: "EditSellerController",
		templateUrl: "components/sellers/editseller.html"
	});
});

"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	}).when("/seller/", {
		controller: "AddNewSellerController",
		templateUrl: "components/addseller/addseller.html"
	}).when("/seller/:id", {
		controller: "SellerController",
		templateUrl: "components/seller-details/seller.html"
	}).when("/seller/edit/:id", {
		controller: "EditSellerController",
		templateUrl: "components/editseller/editseller.html"
	}).when("/seller/:sellerid/product/:id", {
		controller: "EditProductController",
		templateUrl: "components/product/editproduct/editproduct.html"
	}).when("/seller/:sellerid/addproduct", {
		controller: "AddNewProductController",
		templateUrl: "components/product/addproduct/addproduct.html"
	});

	$translateProvider.useStaticFilesLoader({
		prefix : "lang_",
		suffix: ".json"
	});
	$translateProvider.use('en');
});

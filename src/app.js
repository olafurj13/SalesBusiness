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
		controller: "SellerController",
		templateUrl: "components/sellers/seller.html"
	}).when("/seller/edit/:id", {
		controller: "EditSellerController",
		templateUrl: "components/sellers/editseller.html"
	}).when("/seller/:sellerid/product/:id", {
		controller: "EditProductController",
		templateUrl: "components/product/editproduct.html"
	}).when("/seller/:sellerid/addproduct", {
		controller: "AddNewProductController",
		templateUrl: "components/product/addproduct.html"
	});
});

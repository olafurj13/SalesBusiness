"use strict";

describe("AddNewProductController", function() {
	beforeEach(module("project3App"));
	var scope, AddNewProductController, routeParams;
	var mockSellerID = 1;

	var mockCentrisNotify = {
			success: function success(message) {
		},
			error: function error(message) {
		}
	};

	var mockLocation = {
		path: function(p) {
		}
	};

	beforeEach(inject(function ($rootScope, $controller, AppResource, $routeParams) {
		scope = $rootScope.$new();
		AddNewProductController = $controller('AddNewProductController', {
			$scope: scope,
			$location: mockLocation,
			$routeParams: {sellerid: 1},
			AppResource: AppResource,
			centrisNotify: mockCentrisNotify

		});
	}));
	
	it("addProduct should be correctly defined", function(){
		expect(scope.addProduct).toBeDefined();
	});

	it("should return to seller page", function(){
		spyOn(mockLocation, "path");
		scope.back();
		expect(mockLocation.path).toHaveBeenCalledWith("/seller/" + mockSellerID);
	});

	it("product should be added", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		spyOn(mockLocation, "path");
		scope.productName = "a";
		scope.price = 20;
		scope.quantitySold = 20;
		scope.quantityInStock = 20;
		scope.imagePath = "a";
		scope.addProduct();
		expect(mockLocation.path).toHaveBeenCalledWith("/seller/" + mockSellerID);
		expect(mockCentrisNotify.success).toHaveBeenCalledWith("product.Messages.SuccessA");
	});

	it("centris notify error should be displayed if name is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.price = 20;
		scope.quantitySold = 20;
		scope.quantityInStock = 20;
		scope.imagePath = "a";
		scope.addProduct();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("product.Messages.MissingAName");
	});

	it("centris notify error should be displayed if price is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.productName= "a";
		scope.quantitySold = 20;
		scope.quantityInStock = 20;
		scope.imagePath = "a";
		scope.addProduct();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("product.Messages.MissingAPrice");
	});
	it("centris notify error should be displayed if price is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.productName= "a";
		scope.price= 20;
		scope.quantityInStock = 20;
		scope.imagePath = "a";
		scope.addProduct();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("product.Messages.MissingAQuantatySold");
	});
	it("centris notify error should be displayed if price is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.productName= "a";
		scope.price= 20;
		scope.quantitySold = 20;
		scope.imagePath = "a";
		scope.addProduct();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("product.Messages.MissingAQuantityInStock");
	});
	it("centris notify error should be displayed if price is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.productName= "a";
		scope.price= 20;
		scope.quantitySold = 20;
		scope.quantityInStock = 20;
		scope.addProduct();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("product.Messages.MissingAImage");
	});
});
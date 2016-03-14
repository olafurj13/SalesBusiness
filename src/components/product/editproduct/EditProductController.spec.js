"use strict";

describe("EditProductController", function() {
	beforeEach(module("project3App"));
	var scope, EditProductController, routeParams;
	
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
		EditProductController = $controller('EditProductController', {
			$scope: scope,
			$location: mockLocation,
			$routeParams: {id: 1, sellerid:1},
			AppResource: AppResource,
			centrisNotify: mockCentrisNotify

		});
	}));
	
	it(" editProduct should be correctly defined", function(){
		expect(scope.editProduct).toBeDefined();
	});

	it("should return to seller page", function(){
		spyOn(mockLocation, "path");
		scope.back();
		expect(mockLocation.path).toHaveBeenCalledWith("/seller/" + mockSellerID);
	});

	it("product should be edited", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		spyOn(mockLocation, "path");
		scope.products.name = "a";
		scope.products.price = 20;
		scope.products.quantitySold = 20;
		scope.products.quantityInStock = 20;
		scope.products.imagePath = "a";
		scope.editProduct();
		expect(mockLocation.path).toHaveBeenCalledWith("/seller/" + mockSellerID);
		expect(mockCentrisNotify.success).toHaveBeenCalledWith("product.Messages.SuccessE");
	});

	it("centris notify error should be displayed if name is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.products.name = "";
		scope.products.price = 20;
		scope.products.quantitySold = 20;
		scope.products.quantityInStock = 20;
		scope.products.imagePath = "a";
		scope.editProduct();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("product.Messages.MissingEName");
	});

	it("centris notify error should be displayed if price is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.products.name= "a";
		scope.products.price = "";
		scope.products.quantitySold = 20;
		scope.products.quantityInStock = 20;
		scope.products.imagePath = "a";
		scope.editProduct();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("product.Messages.MissingEPrice");
	});

	it("centris notify error should be displayed quantitySold is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.products.name= "a";
		scope.products.price= 20;
		scope.products.quantitySold = "";
		scope.products.quantityInStock = 20;
		scope.products.imagePath = "a";
		scope.editProduct();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("product.Messages.MissingEQuantatySold");
	});

	it("centris notify error should be displayed if quantityInStock is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.products.name = "a";
		scope.products.price = 20;
		scope.products.quantitySold = 20;
		scope.products.quantityInStock = "";
		scope.products.imagePath = "a";
		scope.editProduct();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("product.Messages.MissingEQuantityInStock");
	});

	it("centris notify error should be displayed if imagePath is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.products.name= "a";
		scope.products.price= 20;
		scope.products.quantitySold = 20;
		scope.products.quantityInStock = 20;
		scope.products.imagePath = "";
		scope.editProduct();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("product.Messages.MissingEImage");
	});
});






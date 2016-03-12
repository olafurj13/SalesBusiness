"use strict";

describe("Testing EditSellerController", function() {
	beforeEach(module("project3App"));
	var scope, EditSellerController, routeParams;
	var mockSeller = {
		name : "a",
		category: "a",
		imagePath: "a"
	};
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

	beforeEach(inject(function ($rootScope, $controller, $routeParams, AppResource) {
		scope = $rootScope.$new();
		routeParams = $routeParams;
		EditSellerController = $controller('EditSellerController', {
			$scope: scope,
			$location: mockLocation,
			$routeParams: {id : 1}, 
			AppResource: AppResource,
			centrisNotify: mockCentrisNotify
		});
	}));
	
	it("editSeller should be correctly defined", function(){
		expect(scope.editSeller).toBeDefined();
	});

	it("seller should be edited", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		spyOn(mockLocation, "path");
		scope.name = "aaaa";
		scope.category = "aaaa";
		scope.imagePath = "aaaaa";
		scope.editSeller();
		expect(mockLocation.path).toHaveBeenCalledWith("/seller/1");
		expect(mockCentrisNotify.success).toHaveBeenCalledWith("editseller.Messages.Success");
	});

	it("should return to seller page", function(){
		spyOn(mockLocation, "path");
		scope.back();
		expect(mockLocation.path).toHaveBeenCalledWith("/seller/1");
	});

	it("centris notify error should be displayed if name is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.seller.name = "";
		scope.editSeller();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("editseller.Messages.MissingName");
	});

	it("centris notify error should be displayed if category is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.seller.category = "";
		scope.editSeller();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("editseller.Messages.MissingCategory");
	});

	it("centris notify error should be displayed if image path is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.seller.imagePath = "";
		scope.editSeller();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("editseller.Messages.MissingImage");
	});
});
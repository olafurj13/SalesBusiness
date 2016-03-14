"use strict";

describe("Testing AddNewSellerController", function() {
	beforeEach(module("project3App"));
	var scope, AddNewSellerController, mockAppResource;
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



	beforeEach(inject(function ($rootScope, $controller, AppResource) {

		scope = $rootScope.$new();
		mockAppResource = AppResource;
		AddNewSellerController = $controller('AddNewSellerController', {
			$scope: scope,
			$location: mockLocation,
			AppResource: AppResource,
			centrisNotify: mockCentrisNotify
		});
	}));
	
	it("add seller should be correctly defined", function(){
		expect(scope.addSeller).toBeDefined();
	});

	it("should return to index page (/)", function(){
		spyOn(mockLocation, "path");
		scope.back();
		expect(mockLocation.path).toHaveBeenCalledWith("/");
	});

	it("seller should be added", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		spyOn(mockLocation, "path");
		scope.name = "a";
		scope.category = "a";
		scope.imagePath = "a";
		scope.addSeller();
		expect(mockLocation.path).toHaveBeenCalledWith("/");
		expect(mockCentrisNotify.success).toHaveBeenCalledWith("addseller.Messages.Success");
	});

	it("centris notify error should be displayed if name is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.category = "a";
		scope.imagePath = "a";
		scope.addSeller();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("addseller.Messages.MissingName");
	});

	it("centris notify error should be displayed if category is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.name = "a";
		scope.imagePath = "a";
		scope.addSeller();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("addseller.Messages.MissingCategory");
	});

	it("centris notify error should be displayed if category is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.name = "a";
		scope.category = "a";
		scope.addSeller();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("addseller.Messages.MissingImage");
	});

	it("error function", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		spyOn(mockLocation, "path");
		console.log("ERROR FUNCTION I ADD NEW SELLER CONTROLLER SPEC: ", mockAppResource.successAddSeller);
		mockAppResource.successAddSeller = false;
		console.log("ERROR FUNCTION I ADD NEW SELLER CONTROLLER SPEC: ", mockAppResource.successAddSeller);
		scope.name = "a";
		scope.category = "a";
		scope.imagePath = "a";
		scope.addSeller();
		expect(mockLocation.path).toHaveBeenCalledWith("/");
		expect(mockCentrisNotify.success).toHaveBeenCalledWith("addseller.Messages.Success");
	})

});
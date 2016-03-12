"use strict";

describe("AddNewSellerController", function() {
	beforeEach(module("project3App"));
	var scope, AddNewSellerController;
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

	it("error should be defined if name is undefined", function(){
		spyOn(mockCentrisNotify, "success");
		spyOn(mockCentrisNotify, "error");
		scope.category = "a";
		scope.imagePath = "a";
		scope.addSeller();
		expect(mockCentrisNotify.error).toHaveBeenCalledWith("addseller.Messages.MissingName");
	});

});
"use strict";

describe("AddNewSellerController", function(AppResource) {
	beforeEach(module("project3App"));
	var scope, AddNewSellerController;
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

	beforeEach(inject(function ($rootScope, $controller) {
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

	// it("add seller should be added", function(){
	// 	spyOn(mockCentrisNotify, "success");
	// 	spyOn(mockCentrisNotify, "error");
	// 	expect(mockCentrisNotify.success).toHaveBeenCalledWith("str1");
	// 	expect(mockCentrisNotify.error).not.toHaveBeenCalled();
	// });
});
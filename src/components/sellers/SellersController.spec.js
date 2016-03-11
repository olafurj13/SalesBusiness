"use strict";

describe("SellersController should be unit tested here", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
	beforeEach(module("project3App"));
	var scope, SellersController;
	
	var mockLocation = {
		path: function(p) {
		}
	};

	beforeEach(inject(function ($rootScope, $controller, AppResource) {

		scope = $rootScope.$new();
		SellersController = $controller('SellersController', {
			$scope: scope,
			$location: mockLocation,
			AppResource: AppResource,
			//centrisNotify: mockCentrisNotify
		});
	}));

	it("add getSellersPRomise should be correctly defined", function(){
		expect(scope.addSeller).toBeDefined();
	});

	it("AddSeller should return you to addSeller page", function(){
		spyOn(mockLocation, "path");
		scope.addSeller("/seller");
		expect(mockLocation.path).toHaveBeenCalledWith("/seller");
	});

});
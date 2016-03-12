"use strict";

describe("SellerController", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
	beforeEach(module("project3App"));
	var scope, SellerController;
	
	var mockLocation = {
		path: function(p) {
		}
	};

	beforeEach(inject(function ($rootScope, $controller,$routeParams, AppResource) {

		scope = $rootScope.$new();
		SellerController = $controller('SellerController', {
			$scope: scope,
			$location: mockLocation,
			AppResource: AppResource,
			$routeParams: {id: 1}
			//centrisNotify: mockCentrisNotify
		});
	}));

	it("add getSellersPromise should be correctly defined", function(){
	 	expect(scope.editSeller).toBeDefined();
	});

	it("back Check if back is defined", function(){
		expect(scope.back).toBeDefined();
	});

	it("Imagepath is defined", function(){
		expect(scope.Imagechange).toBeDefined();
	});

	it("addProduct is defined", function(){
		expect(scope.addProduct).toBeDefined();
	});

	it("should return to index page (/)", function(){
		spyOn(mockLocation, "path");
		scope.editSeller("/seller/edit/1");
		expect(mockLocation.path).toHaveBeenCalledWith("/seller/edit/1");
	});

	it("Back return to index/", function(){
		spyOn(mockLocation, "path");
		scope.back();
		expect(mockLocation.path).toHaveBeenCalledWith("/");
	});

	it("addproduct return to location", function(){
		spyOn(mockLocation, "path");
		scope.addProduct("/seller/1/addproduct");
		expect(mockLocation.path).toHaveBeenCalledWith("/seller/1/addproduct");
	});

	it("Image path right", function(){
		spyOn(mockLocation, "path");
		scope.Imagechange(1);
		expect(mockLocation.path).toHaveBeenCalledWith("/seller/1/product/1");

	})
});
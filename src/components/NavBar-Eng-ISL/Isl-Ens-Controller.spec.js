"use strict";

describe("NavController", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
	beforeEach(module("project3App"));
	var scope, NavController, translate;
	
	var mockLocation = {
		path: function(p) {
		}
	};
	translate = {
		  use: jasmine.createSpy('$translate.use')
		}

	beforeEach(inject(function ($rootScope, $controller, $translate, AppResource) {

		scope = $rootScope.$new();

		NavController = $controller('NavController', {
			$scope: scope,
			$location: mockLocation,
			$translate: translate,
			AppResource: AppResource,

			
			//centrisNotify: mockCentrisNotify
		});
	}));

	it("changelanguage should be correctly defined", function(){
	 	expect(scope.changeLanguage).toBeDefined();
	});

	it("Check if get in language right", function(){
		scope.changeLanguage("en");
		expect(translate.use).toHaveBeenCalledWith("en");
	});

});
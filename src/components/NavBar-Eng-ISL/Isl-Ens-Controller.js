"use strict";

angular.module("project3App").controller("NavController",
	function NavController($scope, $translate) {
		$scope.changeLanguage = function (langKey) {	
			$translate.use(langKey);
		};
});
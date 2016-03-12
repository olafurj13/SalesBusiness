"use strict";

angular.module("project3App").controller("NavController",
	function NavController($translate, $scope) {
		$scope.changeLanguage = function (langKey) {
			//console.log("ANDRI       " , langKey);
			$translate.use(langKey);
		};
});
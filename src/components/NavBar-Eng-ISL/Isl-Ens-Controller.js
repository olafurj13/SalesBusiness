"use strict";

angular.module("project3App").controller("NavController",
	function NavController($scope, $location, $translate, $routeParams, AppResource) {
		$scope.changeLanguage = function (langKey) {
			
		$scope.seller = "";
		$scope.products = "";
		var sortProductSold = [];
		var p = "";

		var getSellerDetailsPromise = AppResource.getSellerDetails($routeParams.id);
		getSellerDetailsPromise.success(function(seller){
			$scope.seller = seller;
		});

		var getSellerProductPromise = AppResource.getSellerProducts($routeParams.id);
		getSellerProductPromise.success(function(products){
			p = products;
			sortProductSold = products;
		});

		var check = "";
		for(var i = 0; i < p.length; i++){
			if($translate.use() === "en"){
				console.log(check);
				console.log($translate.use());
				if(check === "en") {
					return;
				}else{
					console.log("Inni Enskt");
					p[i].price = Math.round(p[i].price / 126);
					check = $translate.use();
				}

			}
			if($translate.use() === "is"){
				console.log(check);
				console.log($translate.use());
				if(check === "is") {
					return;
				} else {
					console.log("Inni Islenskt");
					p[i].price = Math.round(p[i].price * 126);
					check = $translate.use();
				}
			}
		}
			
			$translate.use(langKey);
		};
});
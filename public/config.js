var app = angular.module('myModule', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/external", {
			controller: "externalcontroller",
			templateUrl: "external.html"
		})
		.when("/input", {
			controller: "inputcontroller",
			templateUrl: "input.html"
		})
        .when("/lyric", {
            controller: "lyricController",
            templateUrl: "lyric.html"
        })
		.otherwise({redirectTo: "/"});
});

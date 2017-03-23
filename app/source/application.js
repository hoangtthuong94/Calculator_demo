var app = angular.module("calculator", ["ngRoute", "calculator.components"]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: "source/pods/dashboard/view.html",
		controller: "dashboardController"
	})
}]);
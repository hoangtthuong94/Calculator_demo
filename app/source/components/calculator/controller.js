var components = angular.module("calculator.components");

components.directive('calculator', function(){
	var calculator = {};

	calculator.restrict = 'E';
	calculator.scope = {

	};
	calculator.templateUrl = 'source/components/calculator/view.html';
	calculator.controller = 'calculatorController';

	return calculator;
});

components.controller('calculatorController', function($scope){
	$scope.result = '';
	$scope.oparator = '';
	$scope.currentValue = '';

	$scope.onClickValue = function(value){
		$scope.currentValue += value;
	};

	$scope.onClickOparator = function(oparator){

	};

	$scope.calculate = function(){

	};
});
var components = angular.module("calculator.components");

components.directive('calculator', function () {
	var calculator = {};

	calculator.restrict = 'E';
	calculator.scope = {};
	calculator.templateUrl = 'source/components/calculator/view.html';
	calculator.controller = 'calculatorController';

	return calculator;
});

components.controller('calculatorController', function ($scope) {
	$scope.result = '';
	$scope.oparator = null;
	$scope.currentValue = '';
	$scope.firstOperand = '';
	$scope.secondOperand = '';
	$scope.isFinishedCaculating = false;

	$scope.strExpression = '';

	$scope.onClickValue = function (value) {
		if ($scope.isFinishedCaculating) {
			$scope.currentValue = '';
		}
		if ($scope.oparator) {
			$scope.secondOperand += value;
		} else {
			$scope.firstOperand += value;
		}

		$scope.currentValue = $scope.currentValue.toString();
		$scope.currentValue += value;
		$scope.currentValue = parseInt($scope.currentValue);
		$scope.isFinishedCaculating = false;
	};

	$scope.onClickOparator = function (oparator) {
		if (oparator === '=') {
			$scope.strExpression += $scope.currentValue;
			$scope.currentValue = '';
			$scope.calculate();

			return;
		}

		$scope.oparator = oparator;
		if (!$scope.firstOperand) {
			$scope.firstOperand = $scope.currentValue;
		}
		$scope.strExpression += $scope.currentValue + " " + oparator + " ";
		$scope.currentValue = '';
		$scope.isFinishedCaculating = false;
	};

	$scope.calculate = function () {
		switch ($scope.oparator) {
			case '+' : {
				$scope.result = parseInt($scope.firstOperand) + parseInt($scope.secondOperand);
				break;
			}
			case '-' : {
				$scope.result = parseInt($scope.firstOperand) - parseInt($scope.secondOperand);
				break;
			}
			case '*' : {
				$scope.result = parseInt($scope.firstOperand) * parseInt($scope.secondOperand);
				break;
			}
			case '/' : {
				$scope.result = parseInt($scope.firstOperand) / parseInt($scope.secondOperand);
				break;
			}
			default: {

			}
		}

		$scope.currentValue = $scope.result;
		$scope.strExpression = '';
		$scope.result = '';
		$scope.oparator = null;
		$scope.firstOperand = '';
		$scope.secondOperand = '';

		$scope.strExpression = '';
		$scope.isFinishedCaculating = true;
	};

	$scope.reset = function () {
		$scope.result = '';
		$scope.oparator = null;
		$scope.currentValue = '';
		$scope.firstOperand = '';
		$scope.secondOperand = '';

		$scope.strExpression = '';
	}

	$scope.resetCurrentValue = function () {
		$scope.currentValue = '0';
	}

	$scope.backSpace = function () {
		$scope.currentValue = $scope.currentValue.toString();
		$scope.currentValue = $scope.currentValue.slice(0, $scope.currentValue.length - 1);
		if ($scope.oparator) {
			$scope.secondOperand = $scope.currentValue;
		} else {
			$scope.firstOperand = $scope.currentValue
		}
	}
});
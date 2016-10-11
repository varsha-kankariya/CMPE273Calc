var calApp = angular.module('calApp', []);

calApp.controller('calCntrl', [
		'$scope',
		'$http',
		'$window',
		function($scope, $http, $window) {

			console.log("In angular contoller : calCntrl ");
			$scope.input1 = "";
			$scope.input2 = "";
			// $scope.result="";
			// $scope.displayMsg ="";
			$scope.operationValue = "";
			$scope.operator = "";
			$scope.isFloat = false;
			$scope.mulFactorForDecimal = 10;
			$scope.isInvalidNo = true;
			console.log("Is numberValid : "+$scope.isInvalidNo);

						
			$scope.addInputs = function() {

				$scope.input1 = $scope.operationValue;
				$scope.operator = "+";
				$scope.operationValue = "";
				$window.document.getElementById("inputVal").focus();

			};

			$scope.subInputs = function() {

				$scope.input1 = $scope.operationValue;
				$scope.operator = "-";
				$scope.operationValue = "";
				$window.document.getElementById("inputVal").focus();

			};

			$scope.mulInputs = function() {

				$scope.input1 = $scope.operationValue;
				$scope.operator = "*";
				$scope.operationValue = "";
				$window.document.getElementById("inputVal").focus();

			};

			$scope.divInputs = function() {

				$scope.input1 = $scope.operationValue;
				$scope.operator = "/";
				$scope.operationValue = "";
				$window.document.getElementById("inputVal").focus();

			};

			$scope.calculate = function() {

				var url = "";
				$scope.input2 = $scope.operationValue;

				if ($scope.input2 == 0 && $scope.operator === "/") {
					
					$scope.operationValue = 0;

				} else {

					if ($scope.operator === "+") {
						url = "/addNos";
					} else if ($scope.operator === "-") {
						url = "/subNos";
					} else if ($scope.operator === "*") {
						url = "/mulNos";
					} else if ($scope.operator === "/") {
						url = "/divNos";
					}

					var inputInfo = {

						'input1' : $scope.input1,
						'input2' : $scope.input2
					};
					$http({
						method : "POST",
						url : url,
						data : inputInfo

					}).success(function(data) {
						console.log(data.result);
						$scope.operationValue = data.result;
					});
				}

			};

			$scope.clearFields = function() {

				$scope.input1 = "";
				$scope.input2 = "";
				$scope.operationValue = "";
				$scope.operator = "";
			};

			$scope.updateOperationValue = function(val) {
				console.log(val);
				$scope.operationValue+=val;
				
				
			};
			
			
			$scope.reverseSigns = function(){
				var numFormat = Number($scope.operationValue);
				if(numFormat!=0){
					numFormat*= -1;
					$scope.operationValue = numFormat.toString();
					console.log("Negated value : "+$scope.operationValue);
				}
				
			};
			
			
			$scope.addDecimal = function(){
				
				var displayInput = $scope.operationValue;
				if(displayInput.indexOf('.') == -1){
					displayInput+= '.';
					$scope.operationValue = displayInput;
				}
				
				
				
			};

		} ]);
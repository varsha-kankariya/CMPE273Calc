var calApp = angular.module('calApp',[]);

calApp.controller('calCntrl',['$scope','$http',function($scope,$http){
	
	console.log("In angular contoller : calCntrl ");
	$scope.input1 = "";
	$scope.input2 = "";
	$scope.result="";
	$scope.displayMsg ="";
	$scope.input1 = "";
	$scope.input2 = "";
	$scope.operator = "";
	$scope.addInputs = function(){
		
		console.log("In angular addition method");
		console.log("Input1 : "+$scope.input1);
		console.log("Input2 : "+$scope.input2);
		var inputInfo ={				

			'input1' : $scope.input1,
			'input2' : $scope.input2
		};
		$http({
    		method : "POST",
    		url : "/addNos",
    		data : inputInfo
    		
    	}).success(function(data){
    		console.log(data.result);
    		$scope.result = data.result;
    	})
	}
	
	$scope.subInputs = function(){
		
		console.log("In angular subtraction method");
		console.log("Input1 : "+$scope.input1);
		console.log("Input2 : "+$scope.input2);
		var inputInfo ={				

			'input1' : $scope.input1,
			'input2' : $scope.input2
		};
		$http({
    		method : "POST",
    		url : "/subNos",
    		data : inputInfo
    		
    	}).success(function(data){
    		console.log(data.result); 
    		$scope.result = data.result;
    	})
	}
	
	$scope.mulInputs = function(){
		
		console.log("In angular multiplication method");
		console.log("Input1 : "+$scope.input1);
		console.log("Input2 : "+$scope.input2);
		var inputInfo ={				

			'input1' : $scope.input1,
			'input2' : $scope.input2
		};
		$http({
    		method : "POST",
    		url : "/mulNos",
    		data : inputInfo
    		
    	}).success(function(data){
    		console.log(data.result); 
    		$scope.result = data.result;
    	})
	}
	
	$scope.divInputs = function(){
		
		console.log("In angular division method");
		var input1 = $scope.input1;
			
			console.log("Input1 : "+input1);
		var input2 = $scope.input2;
			
			console.log("Input2 : "+input2);
		if(Number(input2) == 0){
			
			$scope.displayMsg = "0 is not allowed as second input for division.Please change your input!!!"
			
		}else{
			var inputInfo ={				
	
				'input1' : $scope.input1,
				'input2' : $scope.input2
			};
			$http({
	    		method : "POST",
	    		url : "/divNos",
	    		data : inputInfo
	    		
	    	}).success(function(data){
	    		console.log(data.result); 
	    		$scope.result = data.result;
	    	})
		}
	}
	
	$scope.clearFields = function(){
		
		console.log("Clearing the fields for new input");
		$scope.input1 ="";
		$scope.input2="";
		//$scope.result_access=false;
		$scope.result = "";
		//$scope.result_access=true;
		$scope.displayMsg ="";
	}
	
	$scope.storeValue = function(){
		
		
		
	}
	
	
}]);
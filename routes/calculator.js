var ejs = require("ejs");
var bodyParser = require('body-parser');

exports.displayCalculator = function(req, res){
	console.log("In Calculator Application");
	ejs.renderFile('./views/actualView.ejs',function(err, result) {
		   // render on success
		   if (!err) {
		            res.end(result);
		   }
		   // render or error
		   else {
		            res.end('An error occurred while displaying the calculator page!');
		            console.log(err);
		   }
	   });
};


exports.addInputs = function(req,res){
	
	
	var input1 = req.body.input1;
	var input2 = req.body.input2;
	console.log("In server side addition method : ");
	console.log("Input 1 : " +input1);
	console.log("Input 2 : " +input2);
	var result = Number(input1)+Number(input2);
	console.log("Server side : Addition result : "+result);
	res.send({"result" : result});
	res.end();
	
	
};

exports.subInputs = function(req,res){
	
	
	var input1 = req.body.input1;
	var input2 = req.body.input2;
	console.log("In server side subtraction method : ");
	console.log("Input 1 : " +input1);
	console.log("Input 2 : " +input2);
	var result = Number(input1)-Number(input2);
	console.log("Server side : Subtraction result : "+result);
	res.send({"result" : result});
	res.end();
	
	
};


exports.mulInputs = function(req,res){
	
	
	var input1 = req.body.input1;
	var input2 = req.body.input2;
	console.log("In server side multiplication method : ");
	console.log("Input 1 : " +input1);
	console.log("Input 2 : " +input2);
	var result = Number(input1)*Number(input2);
	console.log("Server side : Multiplication result : "+result);
	res.send({"result" : result});
	res.end();
	
	
};

exports.divInputs = function(req,res){
	
	
	var input1 = req.body.input1;
	var input2 = req.body.input2;
	console.log("In server side division	 method : ");
	console.log("Input 1 : " +input1);
	console.log("Input 2 : " +input2);
	var result = Number(input1)/Number(input2);
	console.log("Server side : Division result : "+result);
	res.send({"result" : result});
	res.end();
	
	
};
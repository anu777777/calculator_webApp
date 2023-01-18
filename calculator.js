const express = require("express");

const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/index.html");
})

app.post("/", function(request, response) {
    var n1 = request.body.num1;
    var n2 = request.body.num2;
    var answer = n1 + n2;
    response.send("The sum of two numbers is : " + answer);
})

app.get("/bmicalculator", function(request, response) {
    response.sendFile(__dirname + "/bmicalculator.html");
})

app.post("/bmicalculator", function(request, response) {
    var h = parseFloat(request.body.height);
    var w = parseFloat(request.body.weight);
    var bmi = w / h * h;
    response.send("Your BMI is: " + bmi);
})
app.listen(3000, function() {
    console.log("Server started at the port 3000");
});
const express = require('express');
const app = express();

const myarr = ["Pomegranate"];

app.get("/name", function(req, res){
    const fruits = req.query.fruits;
    console.log([fruits])
    
    if (fruits) {
        if (Array.isArray(fruits)) {
            [myarr.push(...fruits)];  
        } else {
           [ myarr.push(fruits)];  
        }
    }
    
    res.send(myarr);
});

app.listen(5000, function(){
    console.log("Server Started...");
    console.log("Server Running on port 5000...")
});

// Importing express in order to make our server
const express = require('express');

// Using app variable to assess express
const app = express();

// Assigning the port 4200 to our server
const port = process.env.PORT || 4200

//when an GET request is made to our server i.e{http://localhost:4200/} it loads our frontend i.e{index.html}
app.get('/',(req,res)=>{
    //Sending the index.html to the browser
    res.sendFile(__dirname + '/index.html');
})

//Assigning a port to the server here it is 4200
app.listen(port,()=>{
    console.log(`running on port ${port}`);
}) 

        

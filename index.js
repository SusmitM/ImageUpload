
const express = require('express');
const http =require('http');
const cors = require('cors');
const request=require('request');
const axios=require('axios');
const app = express();
const server= http.createServer(app);

const multer = require('multer');



const port = process.env.PORT || 4200

const storage = multer.diskStorage({
      destination: function(req, file, cb) {
          cb(null, 'uploads/');
      },
      filename: function(req, file, cb) {
          cb(null, file.originalname);
      },
  });

const upload = multer({ storage: storage });


app.use('/uploads', express.static('./uploads'));

app.use(cors());

let textValue;
app.post('/image', upload.single('image'), async function(req, res, next) {
      
      console.log(req.file.originalname);
      

      const options={
        url:`http://127.0.0.1:7777/user/?user=${req.file.originalname}`,
        method:'GET',
      };
      
      request(options,(err,res,body)=>{
        if(err){
            console.log(err);
            return;
        }
        // console.log(res.body);
        
        const jsonObject = JSON.parse(res.body);
         textValue = jsonObject.Text;
        console.log(textValue);
        
      })
  
      
   
    
  });

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})


server.listen(port,()=>{
    console.log(`running on port ${port}`);
}) 

        

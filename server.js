const express = require('express');
const http =require('http');
const cors = require('cors');

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

const app = express();
app.use('/uploads', express.static('./uploads'));


app.use(cors());

app.post('/image', upload.single('image'), function(req, res, next) {
    res.send('Image received');
    console.log(req.file.originalname)
});


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})


server.listen(port,()=>{
    console.log(`running on port ${port}`);
}) 
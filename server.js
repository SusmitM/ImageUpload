const express = require('express');
const cors = require('cors');
const multer = require('multer');

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

app.listen(4200, () => {
    console.log(`Example app listening on http://localhost:4200`)
  })
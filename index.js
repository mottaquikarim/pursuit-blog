const express = require('express');
// const bycrypt = require('bycrypt');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.get('/', (req,res) =>{
    res.json({});
})



app.use(bodyParser.urlencoded({extended: false }));
//or
app.use(bodyParser.json());



app.listen(port,() => {
    console.log(`listening on port; ${port}`)
})


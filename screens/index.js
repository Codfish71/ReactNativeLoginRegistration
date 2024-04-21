const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs')

const app = express();
const port = 3000;



app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({"key":"value"});
});

app.post('/rpi', (req, res) => {
    const rpiData = req.body;
    console.log(rpiData);
    fs.writeFile('Hello.txt', JSON.stringify(rpiData), (err) => {
 
        // In case of a error throw err.
        if (err) throw err;
    })
    res.send(JSON.stringify(rpiData));
    //copy this rpiData rto txt file
});

app.listen(port, () => {
    console.log(`Application Listening on port ${port}!`)
    console.log("Made with Love By Pratham! <3");
});
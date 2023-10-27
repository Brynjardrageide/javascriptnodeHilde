const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'views')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());





const sendFileOptions = {
    root: path.join(__dirname, 'views'),
    extensions: ['html']
};
let currID = 2;


function aboutRoute(req, res)  {
    res.sendFile('about', sendFileOptions);
}   
function rootRoute(req, res)  {
    res.sendFile('index', sendFileOptions);
}
function sendinnRoute(req, res)  {
    res.sendFile('sendinn', sendFileOptions);
}

app.get('/', rootRoute)
app.get('/about', aboutRoute)
app.get('/sendinn', sendinnRoute)


// postmethod
let namelist = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'}
]

app.post('/post', (req, res) => {
    res.send('POST API');
});

// get by id
app.get('/getall', (req, res) => {
    res.json(namelist);
});

app.post('/newname', (req, res) => {
    currID ++;

    const name = req.body.name;
    const newname = {id: currID, name: name};
    namelist.push(newname);
    res.json(newname);
});


app.listen( 4000, () => { 
    console.log('Server is running')
});


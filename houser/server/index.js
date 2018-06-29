const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const ctrl = require('./controller');

app.use(bodyParser.json());

app.use(express.static('build'));

const PORT =  3005;

massive(process.env.CONNECTION_STRING)
.then(db =>{
    console.log('db connected');
    app.set('db', db);
})
.catch(err => console.log(err));

    app.get('/api/houses', ctrl.getAllHouses)

    app.post('/api/houses', ctrl.addHouse)

    app.delete('/api/houses/:id',ctrl.deleteHouse)


app.listen(PORT, () => console.log('Listeninig'));
var express = require('express');
var router = express.Router();
const _collection = 'parkings';
const database = require('../database/database');
const parking = require('../models/parking')

router.get('/parkings', async (req, res) => {  
    await parking.list( (docs) => { res.status(200).json(docs) } );   
})

router.get('/parkings/:id',async (req,res) => {
    const ide = parseInt(req.params.id);
    let p = await parking.getById(ide);
    res.status(200).json(p)
})

router.post('/parkings', async ( req, res ) => {
    await parking.post(req, (msg) => {res.send(msg)}) 
})

router.put('/parkings', async (req,res) => {
    const id = parseInt(req.body.id);
    let updateDoc = {"$set":req.body}
    await parking.put(updateDoc, id, (msg) => res.send(msg))    
})

router.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id);
    database.db.collection(_collection).deleteMany( {"id":id}, function(err, docs){
        if (err) {
            console.log(err)
            throw err
        }
        console.log(docs);
        res.send('deleted :' +docs)
    })
    
})

module.exports = router;
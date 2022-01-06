const _collection = 'parkings';
const parking = {}
const database = require('../database/database')
/***
 ** CRUD operations
 */
/**CRUD */
parking.list = async (callback) => {
    await database.db.collection(_collection).find({}).toArray(function(err, docs){
        if(err){
            console.log("error : "+err)
            throw err
        }
        callback(docs)   
    })  
}

//GET BY ID
parking.getById = async (id) => {
    return await database.db.collection(_collection).find({"id":id}).toArray();
}

/**POST */
parking.post = async (req, callback) => {
    await database.db.collection(_collection).insertOne( req.body, function(err, docs){
        if (err) {
            console.log(err)
            throw err
        }
        callback(docs)
    })
}

/**PUT */
parking.put = async (updateDoc, id , callback) => {
    await database.db.collection(_collection).updateOne( { "id": id }, updateDoc, function(err, data){
        if (err) {
            console.log(err)
            throw err
        }
        callback("documents modified: "+ data.modifiedCount+"id : "+id)
    })  
}

/**
 * 
 */



module.exports = parking
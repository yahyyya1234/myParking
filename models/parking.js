const _collection = 'parkings';
const parking = {}
const database = require('../database/database')

/**
** ===========CRUD operations===========
*/


/**
 ** GET ALL items 
 * @param {} callback 
 */
parking.list = async (callback) => {
    await database.db.collection(_collection).find({}).toArray(function(err, docs){
        if(err){
            console.log("error : "+err)
            throw err
        }
        callback(docs)   
    })  
}

/**
 * * get item by ID
 * @param {} id 
 * @returns 
 */
parking.getById = async (id) => {
    return await database.db.collection(_collection).find({"id":id}).toArray();
}

/**
 ** POST
 */
parking.post = async (p) => {
    try{
        const parking = await db.collection('parkings').insertOne(p)
        return parking;
    }catch(err){
        console.log(err);
        throw err;
    }   
}
/**
 ** PUT 
 */
parking.put = async (updateDoc, id , callback) => {
    try {
        await database.db.collection(_collection).updateOne( { "id": id }, updateDoc, function(err, data){
            if (err) {
                console.log(err)
                throw err
            }
        callback(id)
    })  
    } catch (error) {
        console.log(error);
        throw error
    }
    
}

/**
 ** patch
 */
parking.patch = async (updateObject, id, result) => {
    try {
        result(await database.db.collection(_collection).update({"id": id}, updateObject));
    } catch (error) {
        console.log(error);
        throw error
    }
    
}


/**
 ** DELETE
 * @param {} id 
 * @param {} callback 
 */

parking.delete = async (id, callback) => {
    try {
        await database.db.collection(_collection).deleteMany( {"id":id}, function(err, docs){
            if (err) {
                console.log(err)
                throw err
            }
            callback(JSON.stringify(docs));
        })
    } catch (error) {
        console.log(error);
        throw error
    }
    
}

/**Exporting module */
module.exports = parking
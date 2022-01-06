/**
 * *express.Router() pour reservations
 * todo post, put, delete
 * ? Can you make it today ?
 */
var express= require('express')
var router = express.Router()

const reservations = require('../reservations.json')

/**
 * *GET /parkings/2/reservations
 * @param idp parking identifier
 */
router.get('/:idp/reservations', (req,res) => {
    const idp = parseInt(req.params.idp)
    reservationsByParkingId = reservations.filter(r => r.parkingId === idp)
    res.status(200).json(reservationsByParkingId);
})

/**
//  * *GET /parkings/2/reservations/5
 * @param idp parking identifier
 * @param idr reservation identifier
 */
router.get('/:idp/reservations/:idr', (req,res) => {
    const idr = req.params.idr;
    const idp = req.params.id;
    const reservation = reservations.find(r => r.id === parseInt(idr) && r.parkingId === parseInt(idp));
    res.status(200).json(reservation)
})

/**
 * * POST /parkings/reservations
 * @body req.body -> json(reservation)
 */
router.post('/reservations', (req,res) => {
    reservations.push(req.body);
    res.status(200).json(reservations)
})

/**
 * * PUT /parkings/reservations
 */
router.put('/reservations', (req,res) => {
    const idr = parseInt(req.body.id);
    const r = reservations.find( r => r.id === idr);
    r.parkingId = req.body.id
    r.vehicle = req.body.vehicle;
    r.parking = req.body.parking;
    r.licensePlate = req.body.licensePlate;
    r.id = req.body.id;
    r.clientName = req.body.clientName;
    r.city = req.body.city;
    r.checkout = req.body.checkout;
    r.checkin = req.body.checkin;
    res.status(200).json(reservations)
})

router.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const newData = parkings.filter(function(p, i, arr){
        return p.id !== id;
    })
    res.status(200).json(newData);
})

module.exports = router;
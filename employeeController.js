const express = require('express');
const router = express.Router();
const Employee = require("../models/employee");
const ObjectId = require('mongoose').Types.ObjectId;
router.get("/", (req, res) => {
    Employee.find((err, doc) => {
        if (!err)
            res.send(doc);
        else
            res.send('error in retriving Data:' + JSON.stringify(err, undefined, 2));
    });
});
router.post('/', (req, res) => {
    const emp = new Employee({
        name: req.body.name,
        salary: req.body.salary,
        emailId: req.body.emailId,
        mobileNumber: req.body.mobileNumber,
        dateOfJoining: req.body.dateOfJoining,
        gender: req.body.gender
    });
    emp.save((err, doc) => {
        console.log(doc);
        if (!err)
            res.send(doc);
        else
            res.log("Error in saving Employee Details:" + JSON.stringify(err, undefined, 2))
    });
});
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No records with the given ID: ${req.params.id}`);
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) res.send(doc);
        else console.log(`Error in retrivivng record: ${JSON.stringify(err, undefined, 2)}`);
    });
});
router.put("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No records with the given ID: ${req.params.id}`);
    const emp = {
        name: req.body.name,
        salary: req.body.salary,
        emailId: req.body.emailId,
        mobileNumber: req.body.mobileNumber,
        dateOfJoining: req.body.dateOfJoining,
        gender: req.body.gender
    };
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err, doc)=>{
        if(!err) res.send(doc);
        else console.log(`Error in Employee Update ${JSON.stringify(err,undefined,2)}`);

    });
});
router.delete("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records with the given ID: ${req.params.id}`);
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err) res.send(doc);
        else console.log(`Error in Employee Delete ${JSON.stringify(err,undefined,2)}`);
    });
});
module.exports = router
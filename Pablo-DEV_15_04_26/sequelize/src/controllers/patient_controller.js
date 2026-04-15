const database = require('../config/database');
const Patient = require('../models/patient');

class PatientController{
    static async index(req, res){
        let patients = await Patient.findAll();
        res.send(JSON.stringify(patients));
    };
    static async show(req, res){
        const {id} = req.params;
        let patient = await Patient.findAll({id: id});
        let code = patient.length == 0 ? 404 : 200;
        res.send(code ,JSON.stringify(patient))
    };
    static async create(req, res) {
        const {name, age, priority} = req.body;
        let patient = Patient.create({
            name: name,
            age: age,
            priority: priority,
        });
        res.send(JSON.stringify(patient));
    };
};

module.exports = PatientController;
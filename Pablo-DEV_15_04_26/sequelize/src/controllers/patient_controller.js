const database = require('../config/database');
const Patient = require('../models/patient');

class PatientController{
    static async index(req, res){
        let patients = await Patient.findAll();
        res.send(JSON.stringify(patients));
    };
    static async show(req, res){
        const {id} = req.params;
        let patient = await Patient.findByPk(id);
        
        res.send(JSON.stringify(patient));
    };
    static async create(req, res) {
        const {name, age, priority} = req.body;
        let patient = await Patient.create({
            name: name,
            age: age,
            priority: priority
        });
        patient.save();
        res.send(JSON.stringify(patient));
    };
    static async update(req, res) {
        const { id } = req.params;
        const {name, age, priority } = req.body;
        
        let patient = await Patient.findByPk(id);
        if (name !== undefined) patient.name = name;
        if (age !== undefined) patient.age = age;
        if (priority !== undefined) patient.priority = priority;
        
        await patient.save();
        
        res.send(JSON.stringify({ sucess: true }));
    };
    static async delete(req, res) {
        const { id } = req.params;
        let patient = await Patient.findByPk(id);
        patient.destroy();

        res.send(JSON.stringify({ sucess: true }));
    };
};

module.exports = PatientController;
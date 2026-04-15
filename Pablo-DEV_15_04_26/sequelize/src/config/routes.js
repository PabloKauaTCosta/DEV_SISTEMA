const PatientController = require('../controllers/patient_controller');

function route(app){
    app.get("/patients", (req, res) => {
        PatientController.index(req, res)
    });
    app.get('/patient/:id', (req, res) => {
        PatientController.show(req, res);
    });
    app.post('/patient', (req, res) => {
        PatientController.create(req, res);
    });
    app.put("/patient/:id", (req, res) => {
        PatientController.update(req, res);
    });
    app.delete("/patient/:id", (req, res) => {
        PatientController.delete(req, res);
    });
};

module.exports = route;
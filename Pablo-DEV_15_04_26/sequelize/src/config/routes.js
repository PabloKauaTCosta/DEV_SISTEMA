const PatientController = require('../controllers/patient_controller');

function route(app){
     app.get("/patients", (req, res) => {
          PatientController.index(req, res);
     });
     app.get('/patient/:id', (req, res) => {
          PatientController.show(req, res);
     });
     app.post('/patient', (req, res) => {
          PatientController.create(req, res);
     });
};

module.exports = route;
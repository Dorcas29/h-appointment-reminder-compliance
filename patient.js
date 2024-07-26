const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    medication: { type: String, required: true },
    diet: { type: String, required: true },
    initialPills: { type: Number, required: true },
    pillsPerDay: { type: Number, required: true },
    remainingPills: { type: Number },
    compliancePercentage: { type: Number }
});

module.exports = mongoose.model('Patient', patientSchema);


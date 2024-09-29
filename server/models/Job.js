const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String, required: true },
    postedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);

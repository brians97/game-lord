const mongoose = require('mongoose');

const ConsoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    game: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
    }],
}, {timestamps: true});

// Create and Export Console Model
module.exports = mongoose.model('Console', ConsoleSchema);
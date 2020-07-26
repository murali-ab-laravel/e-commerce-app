const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    org_id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    domain: {
        type: String,
        require: false
    },
    added_date: {
        type: Date
    },
    updated_date: {
        type: Date
    },
    added_by: {
        type: Number
    },
    updated_by: {
        type: Number
    },
    status: {
        type: Number,
        default: 1,
        require: true
    }
});

module.exports = mongoose.model('Organizations', organizationSchema);
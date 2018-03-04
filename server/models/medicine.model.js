var mongoose = require('mongoose');

var MedineSchema=new mongoose.Schema({
    code:String,
    name:String,
    function:String,
    updated_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Medicine', MedineSchema);
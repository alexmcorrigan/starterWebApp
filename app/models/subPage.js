var mongoose = require('mongoose');

module.exports = mongoose.model('SubPage', {
    name: {type: String, default: ''}
});
var SubPage = require('./models/subPage');

module.exports = function(app) {
    app.get('./api/subPage', function(req, res) {
        SubPage.find(function(err, nerds) {
            if (err) res.send(err);
            res.json(nerds);
        })
    });

    app.get('*', function(req, res) {
        res.sendFile('./public/views/index.html');
    })
};
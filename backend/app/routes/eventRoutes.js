module.exports = function(app) {
    var events = require('../controllers/eventController.js');

    // test server
    app.get("/", (req, res) => {
        res.json({ message: "Hello EFREI Student - Your Server lives!!!" });
    });
    
    // Create a new event
    app.post('/api/events', events.create);
}
module.exports = function(app) {
    var events = require('../controllers/eventController.js');

    // test server
    app.get("/", (req, res) => {
        res.json({ message: "Hello EFREI Student - Your Server lives!!!" });
    });

    app.get("/api/events", events.findAll);

    app.get("/api/events/:id", events.findOne);

    app.post('/api/events', events.create);

    app.put("/api/events/:id", events.update);

    app.delete("/api/events/:id", events.delete);

    app.delete("/api/events", events.deleteAll);

}

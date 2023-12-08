module.exports = function(app) {
    var events = require('../controllers/eventController.js');

    // test server
    app.get("/", (req, res) => {
        res.json({ message: "Hello EFREI Student - Your Server lives!!!" });
    });

    app.get("/events", events.findAll);

    app.get("/events/:id", events.findOne);

    app.post('/events', events.create);

    app.put("/events/:id", events.update);

    app.delete("/events/:id", events.delete);

    app.delete("/events", events.deleteAll);

}

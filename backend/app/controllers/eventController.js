const db = require("../models");
const Event = db.events;
const Op = db.Sequelize.Op;

// Create and Save a new Event
exports.create = (req, res) => {
  res.json({ message: "Event created successfully." });
};

// Retrieve all Events from the database.
exports.findAll = (req, res) => {
  res.json({ message: "All events retrieved successfully." });
};

// Find a single Event with an id
exports.findOne = (req, res) => {
  res.json({ message: "Single event retrieved successfully." });
};

// Update an Event by the id in the request
exports.update = (req, res) => {
  res.json({ message: "Event updated successfully." });
};

// Delete an Event with the specified id in the request
exports.delete = (req, res) => {
  res.json({ message: "Event deleted successfully." });
};

// Delete all Events from the database.
exports.deleteAll = (req, res) => {
  res.json({ message: "All events deleted successfully." });
};

// Find Events from the database with title.
exports.findByTitle = (req, res) => {
  res.json({ message: "Events with the specified title found successfully." });
};
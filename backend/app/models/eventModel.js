module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
        category: {
            type: Sequelize.STRING
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.date
        },
        time: {
            type: Sequelize.time
        },
        petsAllowed: {
            type: Sequelize.BOOLEAN
        },
        organizer: {
            type: Sequelize.STRING
        },
        
        
        });
        return Event;
    };

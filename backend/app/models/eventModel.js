module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
        title: {
        type: Sequelize.STRING
        },
        description: {
        type: Sequelize.STRING
        },
        petsAllowed: {
        type: Sequelize.BOOLEAN
        }
        // and next position
        
        });
        return Event;
    };
    
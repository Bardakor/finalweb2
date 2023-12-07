module.exports = {
    HOST: "localhost", // if you installed mySQL locally
    // localization your mySQL instance – in this example I use mySQL instance from AGH cloud
    USER: "root", 
    PASSWORD: "",
    DB: "your db name",
    dialect: "mysql",

    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
    };


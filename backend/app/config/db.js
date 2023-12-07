module.exports = {
    HOST: "localhost", 
    // or HOST: "localhost" if you installed mySQL locally
    // localization your mySQL instance – in this example I use mySQL instance fro AGH cloud
    
    USER: "camille", 
    /// for example for me it is rogus

    PASSWORD: "your password",
    DB: "events_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
};

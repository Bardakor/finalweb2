
# README

# First step

Import the file "events_db.mysql" into your newly created database in PHPmyAdmin

## User Information

In the database, you will find a table USER already filled up with two example user 

| Username | Email           | Password | Role  |
|----------|-----------------|----------|-------|
| admin    | admin@gmail.com | admin    | admin |
| paul     | paul@gmail.com  | paul     | user  |


## Run the project

Modify the file `config` in `backend/app/config` with the following content:

```javascript
module.exports = {
    HOST: "REPLACE", 
    USER: "REPLACE", 
    PASSWORD: "",
    DB: "REPLACE",
    dialect: "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
```

Then execute the following commands in Visual Studio Code:

```
cd backend
npm start

cd frontend
npm run serve
```

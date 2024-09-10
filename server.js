const express = require('express')
const mysql2 = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())

var dbConfig = {
    host: "localhost",
    user: "kvrm",
    password: 'Mysql#123',
    database: 'devschema',
    connectionLimit: 50,
    queueLimit: 0,
    waitForConnection: true
};

const dbConnection = mysql2.createPool(dbConfig);

app.get('/', (req, res)=> {
    return res.json("From Backend service:");
})

app.get('/users', (req, res)=> {
    console.log("Inside server.js: ")
    const sql = "SELECT * FROM employees";
    dbConnection.query(sql, (err, data)=> { 
        
       // console.log("Inside server.js: data: " + data + ", err: " + err)

        if(err != null){
            console.log("Inside server.js: Returning with error: " + err)
            return res.json(err);
        } else{
            // console.log("Inside server.js: Succefully fetch data: " + data)
            return res.json(data); // data fetch succesfully done here..
        }
    })
    // in a way something went wrong here also..
    // return res.json("From Backend service:");
})

app.listen(8000, ()=>{
    console.log("Listening on 8000!!!");
})




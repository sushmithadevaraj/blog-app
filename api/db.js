import mysql from "mysql"

const db =  mysql.createConnection({
    host: "localhost",
    user:"root",
    // port: '3306',
    password:"your new password",
    database:"blog"
})

export default db
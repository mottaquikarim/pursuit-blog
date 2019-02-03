const pgp = require('pg-promise')({});
const db = pgp ('postgres;//localhost/blog');

const userService = { };

userService.create = (name, email, password) => {
    return db.none('INSERT INTO users (name, email, password) VALUES name, email, password', {name,email,password})
};

userService.read = (id) => {
    return db.one('SELECT * FROM users WHERE id = ${id}'), {id})
};

userService.update = (id, email, username, password, token = null) => {
    const arr = [username, email, password, token]
    const arrString = ["username","email", "password", "token"]
    let sqlStr = 'UPDATE users SET' + arr.reduce((acc, element, i) => {
        if(element){
            acc += arrString[i] + ' =${' + arrString[i] + '},'
            return acc
        }
        return acc
    },'')
    sqlStr = sqlStr.slice(0, sqlStr.length-1)
    sqlStr = sqlStr + 'WHERE ID = ${id}'

};

userService.delete = () => {

};

module.exports = userService;
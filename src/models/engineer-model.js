const con = require('../config/conn')

module.exports = {
    
    getAll : (offset, limit, sort, sortBy, search) => {
        return new Promise((resolve, reject) => {
          const query = `SELECT * FROM engineer WHERE (name LIKE '%${search}%' or skill LIKE '%${search}%' or id LIKE '%${search}%') 
          ORDER BY ${sortBy} ${sort} LIMIT ${offset}, ${limit}`
    
            con.query(query, (err, result) => {
                if (err) {
                reject(new Error(err))
                } else {
                resolve(result)
                }
            })
        })
    },
        // create engineer
        createEngineer: (data) => {
            return new Promise((resolve, reject) => {
                con.query("INSERT INTO engineer SET ?", data, (err, result) => {
                    if (!err) {
                        resolve(result)
                    }else {
                        reject(new Error(err))
                    }
                })
            })
        },
        // update engineer
    updateEngineer: (data, id) => {
        return new Promise((resolve, reject) => {
            con.query("UPDATE engineer SET ? where id = ?", [id, data], (err, result) => {
                if (!err) {
                    resolve(result)
                }else {
                    reject(new Error(err))
                }
            })
        })
    },
        // delete engineer
        deleteEngineer: (id) => {
        return new Promise((resolve, reject) => {
            con.query("DELETE FROM engineer WHERE id = ?", id, (err, result) => {
                if (!err) {
                    resolve(result)
                }else {
                    reject(new Error(err))
                }
            })
        })
    },
}
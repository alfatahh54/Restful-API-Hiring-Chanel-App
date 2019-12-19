const con = require('../config/conn')

module.exports = {

    // view company table
    company: (offset, limit, sort, sortBy, search) => {
        return new Promise((resolve, reject) => {
          const query = `SELECT * FROM company WHERE (name LIKE '%${search}%' or description LIKE '%${search}%' or id LIKE '%${search}%') 
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

    // insert company
    createCompany: (data) => {
        return new Promise((resolve, reject) => {
            con.query("INSERT INTO company SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                }else {
                    reject(new Error(err))
                }
            })
        })
    },

    // update company
        updateCompany: (data, id) => {
        return new Promise((resolve, reject) => {
            con.query("UPDATE company SET ? where id = ?", [id, data], (err, result) => {
                if (!err) {
                    resolve(result)
                }else {
                    reject(new Error(err))
                }
            })
        })
    },

    // update company
        deleteCompany: (id) => {
        return new Promise((resolve, reject) => {
            con.query("DELETE FROM company WHERE id = ?", id, (err, result) => {
                if (!err) {
                    resolve(result)
                }else {
                    reject(new Error(err))
                }
            })
        })
    },
}
'use strict'

const conn = require('../config/conn')

module.exports = {
    register : (data, dataEngineer, dataCompany)=>{
        return new Promise((resolve, reject)=>{
            conn.query('INSERT INTO user set ?', data, (err)=>{
                if(!err){
                    if(data.role==='Engineer'){
                        conn.query('INSERT INTO engineer set ?', dataEngineer, (err)=>{
                            if(!err){
                                let message = 'Register success'
                                resolve(message)    
                            }else{
                                reject(new Error(err))
                            }
                        })
                    }else{
                        conn.query('INSERT INTO company set ?' , dataCompany, (err)=>{
                            if(!err){
                                let message = 'Register success'
                                resolve(message)    
                            }else{
                                reject(new Error(err))
                            }
                        })
                    }
                    
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    getUser : (email)=>{
        return new Promise((resolve, reject)=>{
            conn.query('SELECT * From user where email = ?', email, (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    }
}
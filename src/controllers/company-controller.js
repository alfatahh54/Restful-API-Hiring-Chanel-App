const uuidv4 = require('uuid/v4')
const multer = require("multer")
const companyModels = require('../models/company-model')
const miscHelper = require('./respons')
const conn = require('../config/conn')

// multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images/company');
      },
    filename: (req, file, cb) => {
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
        cb(null, file.fieldname + '-' + Date.now() + '.' + filetype)
    }
})

//init upload multer
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1 * 1024 * 1024
    },
}).single('logo')

module.exports = {

    // view table company
    getCompany:(req, res)=>{
        const page = parseInt(req.query.page) || 1
        const search = req.query.search || ''
        const limit = req.query.limit || 10
        const sort = req.query.sort || 'DESC'
        const sortBy = req.query.sortBy || 'name'
        const offset = (page - 1) * limit
    
        let totalDataCompany = 0,
             totalPage = 0,
             prevPage = 0,
             nextPage = 0
        conn.query(`SELECT COUNT(*) as data FROM company WHERE (name LIKE '%${search}%')`, (err, res) => {
          if (err) {
            return miscHelper.response(res, 400, true, 'Error', err)
          }
          totalDataCompany = res[0].data
          totalPage= totalDataCompany%limit===0?totalDataCompany/limit:Math.floor((totalDataCompany/limit)+1)
          prevPage = page === 1 ? 1 : page - 1
          nextPage = page === totalPage ? totalPage : page + 1
        })

    
        companyModels.company(offset, limit, sort, sortBy, search)
          .then(result => {
            res.status(200).json({
              status: 200,
              error: false,
              source: 'api',
              data: result,
              total_data: Math.ceil(totalDataCompany),
              per_page: limit,
              current_page: page,
              total_page: totalPage,
              nextLink: `${req.originalUrl.replace('page=' + page, 'page=' + nextPage)}`,
              prevLink: `${req.originalUrl.replace('page=' + page, 'page=' + prevPage)}`,
              message: 'Success getting all data'
             })
          })
          .catch(err => {
            res.status(400).json({
              status: 400,
              error: true,
              message: err
            })
          })
    },
// create Company
createCompany: (req, res) => {
upload(req, res, (err) => {
    const { name, location, description, email } = req.body;
    const id = uuidv4(); // generate new id
    const logo = `http://localhost:3000/company/${req.file.filename}`||'';
    const data = {id, name, logo, location, description, email };
    console.log(req.body);
    companyModels.createCompany(data)
        .then(result => {
                res.status(201).json({
                status: 201,
                err: false,
                data,
                message: 'Success add new company'
                })
            })
        .catch(err => {
            res.status(400).json({
                status: 400,
                err: true,
                message: err
                })   
            })
        })
    },

// update company
updateCompany: (req, res) => {
    upload(req, res, (err) => {
      const { name, location, description, email } = req.body;
      const id = req.params.id; // generate new id
      const logo =  `http://localhost:3000/company/${req.file.filename}`;
      const data = {id, name, logo, location, description, email };
      console.log(req.body);
      companyModels.updateCompany(id, data)
          .then(result => {
                  res.status(201).json({
                  status: 201,
                  err: false,
                  data,
                  message: 'Success edit company'
                  })
              })
          .catch(err => {
              res.status(400).json({
                  status: 400,
                  err: true,
                  message: err
                  })   
              })
          })
      },
    

// delete company
deleteCompany: (req, res) => {
    const id = req.params.id;
    companyModels.deleteCompany(id)
        .then(result => {
            res.status(201).json({
            status: 201,
            err: false,
            message: "Company have been deleted" 
            })
        })
        .catch(err => {
            res.status(400).json({
            status: 400,
            err: true,
            message: err
            })
        })
    }
}
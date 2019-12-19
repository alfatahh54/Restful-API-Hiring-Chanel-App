require("dotenv/config"); // getting ENV value
const jwt = require("jsonwebtoken");

module.exports = {
    engineerCheck : (req,res,next)=>{
        const {authorization, email} = req.headers
        if(!authorization || email){
            return res.status(404).json({
                messaage: 'Unauthorization'
            })
        }
        const token = authorization.split(" ")[1] 
        //decode JWT and validation
        jwt.verify(token, process.env.SECRET_KEY,(err,decoded)=>{
            if(err && err.name === 'JasonWebTokenError'){
                return res.status(403).json({
                    messaage: 'invalid Token!'
                })
            }
            if(err && err.name === 'JasonWebTokenError'){
                return res.status(403).json({
                    message: 'Expired Token!'
                })
            }
            //check if token is registered wwith correct email
            if(email !== decoded.result[0].email){
                return res.status(403).json({
                    message: 'Token is not valid for selected email'
                })
            }
            if(decoded.result[0].role === 'enginer'){
                return res.status(403).json({
                    message: 'Access Denied'
                })
            }
            next()
        })
    },
    companyCheck : (req,res,next)=>{
        const {authorization, email} = req.headers
        if(!authorization || email){
            return res.status(404).json({
                messaage: 'Unauthorization'
            })
        }
        const token = authorization.split(" ")[1] 
        //decode JWT and validation
        jwt.verify(token, process.env.SECRET_KEY,(err,decoded)=>{
            if(err && err.name === 'JasonWebTokenError'){
                return res.status(403).json({
                    messaage: 'invalid Token!'
                })
            }
            if(err && err.name === 'JasonWebTokenError'){
                return res.status(403).json({
                    message: 'Expired Token!'
                })
            }
            //check if token is registered wwith correct email
            if(email !== decoded.result[0].email){
                return res.status(403).json({
                    message: 'Token is not valid for selected email'
                })
            }
            if(decoded.result[0].role === 'company'){
                return res.status(403).json({
                    message: 'Access Denied'
                })
            }
            next()
        })
    },
    check : (req,res,next)=>{
        const {authorization, email} = req.headers
        if(!authorization || email){
            return res.status(404).json({
                messaage: 'Unauthorization'
            })
        }
        const token = authorization.split(" ")[1] 
        //decode JWT and validation
        jwt.verify(token, process.env.SECRET_KEY,(err,decoded)=>{
            if(err && err.name === 'JasonWebTokenError'){
                return res.status(403).json({
                    messaage: 'invalid Token!'
                })
            }
            if(err && err.name === 'JasonWebTokenError'){
                return res.status(403).json({
                    message: 'Expired Token!'
                })
            }
            //check if token is registered wwith correct email
            if(email !== decoded.result[0].email){
                return res.status(403).json({
                    message: 'Token is not valid for selected email'
                })
            }
            next()
        })
    }
}

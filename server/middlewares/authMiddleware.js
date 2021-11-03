const models = require('../models')


const jwt = require('jsonwebtoken')

function authenticate(req, res, next) {

     // validate the token 
     let headers = req.headers['authorization']
     if(headers) {
        try{
         const token = headers.split(' ')[1]
        
         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
         
         if(decoded) {
             const username = decoded.username 
             const authUser = models.User.findOne({
        where: {
            username: username,

        }
    })
             if(authUser) {
                next() // continue with the original request 
             } else {

                 res.json({error: 'Unable to authenticate'})
                 res.redirect('/')
             }
         } else {
             res.json({error: 'Unable to authenticate'})
             res.redirect('/')
         }

        }catch {res.json({ success: false, message: 'Not Authenticated' })}
     }else {
        res.json({error: 'Required headers are missing...'})
         res.redirect('/')
     }
    
}

module.exports = authenticate 
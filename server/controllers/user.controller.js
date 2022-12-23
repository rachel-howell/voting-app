 
const User = require('../models/polling.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonbwebtoken')

const SECRET = process.env.SECRET_KEY


module.exports = {
    registerUser: async (req,res)=> {
        try{
            const newUser = await User.create(req.body)
            const userToken = jwt.sign({_id: newUser._id, email})
            res.status(201).cookie('userToken', userToken, {httpOnly:true, expires: new Date(Date.now() + 90000)}).json({successMage: 'User logged in', user: newUser})
        }catch(err) { 
            res.status(400).json(err)
        }
       
    },
    loginUser:async (req, res)=> {
        const userInDB = await User.findOne({email:req.body.email})
        if(!userInDB) {
            res.status(400).json({error: "Invalid email/password combination"})
        }
        try {
            const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
            if(!isPasswordValid) {
                res.status(400).json({error: "Invalid email/password combination"})
            } else {
                const userToken = jwt.sign({_id: userInDB._id, email: userInDB.email})
                res.status(201).cookie('userToken', userToken, {httpOnly:true, expires: new Date(Date.now() + 90000)}).json({successMessage: 'User logged in', user: userInDB})
            }
        }catch(err) {
            res.status(400).json({error: "Invalid email/password combination"})
        }
    },
    logoutUser: (req, res)=> {
        res.clearCookie('userToken')
        res.json({success: 'User logged out'})
    }
}




const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const SECRET = process.env.SECRET


module.exports = {
    registerUser: (req, res) => {
        const {firstName, lastName, email, password} = req.body
        const newUser = User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id: newUser._id, email
            }, SECRET);
            res.status(201).cookie("userToken", userToken, {
                httpOnly: true,expires: new Date(Date.now() + 90000)})
                .json({successMessage: 'User registered', user: newUser})
            })
        .catch(err => res.json(err));
    },
    loginUser:async (req, res)=> {
        const userInDB = await User.findOne({_id:req.body._id})
        if(!userInDB) {
            res.status(400).json({error: "Invalid id/password combination"})
        }
        try {
            const isPasswordValid = await bcrypt.compare(req.body.password, userInDB.password)
            if(!isPasswordValid) {
                res.status(400).json({error: "Invalid id/password combination"})
            }else {
                const userToken = jwt.sign({_id: userInDB._id}, SECRET)
                res.status(201).cookie('userToken', userToken, {httpOnly:true, 
                    expires: new Date(Date.now() + 90000)}).json({successMessage: 'User logged in', user: userInDB})
            }
        }catch(err) {
            res.status(400).json({error: "Invalid id/password combination"})
        }
    },
    logoutUser: (req, res)=> {
        res.clearCookie('userToken')
        res.json({success: 'User logged out'})
    }
}




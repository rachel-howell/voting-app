const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ContenderSchema = new mongoose.Schema({
    name:
     { type: String,required: [
        true,
        "Name is required"
    ] },
    pastTermStartDate:
     {type: Date,required: [
        true,
        "Start Date is required"
    ]},
    pastTermEndDate:
    {type: Date,required: [
       true,
       "End Date is required"
   ]},
    party:
     { type: String,required: [
        true,
        "Party is required"
    ] },
    stance:
     {type: String,required: [
        true,
        "Stance is required"
    ]},
    experience:
     {type: String,required: [
        true,
        "Experience is required"
    ]}
}, { timestamps: true });


module.exports = mongoose.model('Contender', ContenderSchema);

const UserSchema = new mongoose.Schema({
    firstName:
     { type: String,required: [
        true,
        "First Name is required"
    ] },
    lastName:
     { type: String, required: [
        true,
        "Last Name is required"
    ] },
    email :{
        type: Date,required: [
        true,
        "Email is required"
    ]},
    password: {
        type: String, required:
        [true,'Password field is required'], 
    minLength: [8, "This Field must be at least 8 chars long"],
    maxLength: [12, "This must be less than 11 chars long"]}
}, { timestamps: true });


module.exports = mongoose.model('User', UserSchema);
 

// hashes password
UserSchema.pre('save',async function(next)){
    try {
        // 10 is number of times to salt password
        const hashedPassword = await bcrypt.hash(this.password, 10)
        console.log('hashed password', hashedPassword)
        this.password = hashedPassword
        next()
    }
    catch {
        console.log('Error in save', error)
    }
}

UserSchema.virtual('confirmPassword')
.get(()=>this._confirmPassword= value)
.set(value=>this._confirmPassword = value)

UserSchema.pre('validate', function(next) {
    if(this.password!==this.confirmPassword) {
        this.invalidate('confirmPassword','Password must match confirm password')
    }
    next()
})


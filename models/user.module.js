/*let mongoose = require('mongose');
let bcrypt = require('bcryptjs');
const { use } = require('../routes/user.route');
let UserSchema = mongose.Schema({
    name:{
        type: String
    }, 
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

var User = mongoose.model('User', UserSchema);

// Save user database

User.addUser = (user, callback)=>{

    bcrypt.genSalt(10, (err, salt)=>{
        if(err){
            callback('server error');
        }else{
            bcrypt.hash(user.password, salt, (err,hash)=>{
                if(err){
                    callback('server error');
                }else{
                    user.password = hash;
                    user.save((err, result)=> {
                        if (err){
                            console.log(err);
                            return callback('Faile to add', null);
                        }else{
                            callback(null, 'User added')
                        }
                    });
                }
            });
        }
    })

    
};

//Login 

User.login= (email, password, callback)=>{
    User.findOne({email:email}, (err, user)=>{
        if (err){
            console.log(err);
            callback('server error');
        }else if (user == undefined){
            callback('User not found');
        }else{
            bcrypt.compare(password, user.password, (err, isMatch)=>{
                if (err){
                    callback('Server error');
                }else if(isMatch === true){
                    callback(null, 'login succesfuly');
                }else{
                    callback('login info incorrect');
                }
            });
           
        }
    });
}



module.exports = User;
*/
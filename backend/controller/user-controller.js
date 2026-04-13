

class UserController{
    static register(req,res){
        res.send("User Registered")
    }       
    static login(req,res){
        res.send("User Logged In")
    }   
    static getUser(req,res){
        res.send("User Details")
    }       
}

module.exports=UserController   
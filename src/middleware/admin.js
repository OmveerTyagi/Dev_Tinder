const authAdmin = (req,res,next) =>{
    const JWT = "ABC";
    const authToken = "ABC";
    if(authToken !== JWT){
        res.status(400).send("you are not aunthenticated user")
    }
    else{
        next();
    }
}

module.exports = {authAdmin};
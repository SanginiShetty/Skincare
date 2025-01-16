import JWT from 'jsonwebtoken';

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
    try{
        const decode = JWT.verify(
            req.headers.authorization, 
            process.env.JWT_SECRET
        );
        next();
    }catch (error){
        console.log(error);
    }
};

//admin access
export const isAdmin = async(req,res,next) => {
    try{
        const user =  await userModel.findById(req.user)
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message:'UnAuthorized Access',
            });
        }
        else {
            next();
        }
    }catch(error){
        console.log(error)
    }
}
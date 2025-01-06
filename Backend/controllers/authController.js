import userModel from "../models/userModel";
import { hashedPassword } from './../helpers/authHelper';

export const registerController = async(req, res) => {
    try {
        const {name, email, password, phone, address}= req.body
        //validations
        if(!name) {
            return res.send({error: 'Name is Required'})
        }
        if(!email) {
            return res.send({error: 'Email is Required'})
        }
        if(!password) {
            return res.send({error: 'Password is Required'})
        }
        if(!phone) {
            return res.send({error: 'Phone number is Required'})
        }
        if(!address) {
            return res.send({error: 'Address is Required'})
        }
        //check user
        const existingUser = await userModel.findOne({email})

        //existing user
        if(existingUser){
            return res.status(200).send({
                success: true,
                message:'Alreaady Registered'
            })
        }
        //register user
        const hashedPassword = await hashedPassword(password);
        //save
        const user = new userModel({name,email,phone,address,password:hashedPassword}).save()

        res.status(201).send({
            success: true,
            message: 'User Register Successfully',
            user
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'Error in Registration',
            error
        })
    }
};

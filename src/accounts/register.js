import bcrypt from 'bcryptjs';
// import { user } from '../user/user.js';
const { genSalt, hash } = bcrypt;

export async function registerUser(email, password) {
    const { user } = await import("../user/user.js")
    // generate the salt 
    const salt = await genSalt(10)
    console.log("salt", salt)
    // hash with salt 
    var hashPassword = await hash(password, salt)
    console.log("hashedPassword", hashPassword)
    // save in database
    const result = await user.insertOne({
        email, password: hashPassword
    })
    // return user from db
    return result.insertedId
    
}
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: [true,"unique"],
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    required: [true, "password is required"]
  }
},{timestamps: true})

 const User = mongoose.model('User',userSchema)

 export default User
 

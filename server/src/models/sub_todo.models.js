import mongoose from 'mongoose'

const subTodoSchema = new mongoose.Schema({
  content:{
    type: String,
    required: true,

  },
  completed:{
    type: Boolean,
    default: false
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  mileStone: {
    type: String,
    required: false,
  },
  docuMen:{
    type: String,
    required: false,

  },
  status: {
    type: String,
    enum: ["PENDING","WORKING","DONE"],
    default: "PENDING"
  }
},{timestamps: true})

export const subTodo = mongoose.model('subTodo',subTodoSchema)
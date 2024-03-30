import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
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
  subTodos: [
    {type: mongoose.Schema.Types.ObjectId,
    ref: "subTodo"
    }
  ]// array of sub todo
},{timestamps: true})

const Todo = mongoose.model("Todo",todoSchema)

export default Todo
import mongoose from "mongoose";

(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice1",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("CONNECTED TO DB!!");
  } catch (err) {
    console.log("errror sdf");
    console.log(err);
  }
})();


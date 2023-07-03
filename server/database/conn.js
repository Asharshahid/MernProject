import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/BlogWeb'
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true,
    // useFindAndModify:fasle
).then(()=>{console.log("Connection succesful")})
.catch( (error)=>{console.log(`Connection failed ${error}`)})

import mongoose from "mongoose";

export const postSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    username:{
        type:String,
        ref:"user"
    },
    image: {
        type: String,
        required:false
      },
    title : {
        type: String,
        required : [true, "Title must required"]
    },
    desc : {
        type: String,
        required : [true, "Description must required"],
        unique : [true, "Please provide unique description of the post"]
    },
    categories:{
        type: Array,
        required:false
    }
},{timestamps:true}
)


export default mongoose.model.Posts || mongoose.model("Post", postSchema)

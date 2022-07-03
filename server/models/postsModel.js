import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
    creator: String,
    postTitle: String,
    postPhoto: String,
    postLikes: {
        type: [String],
        default: []
    },
    postComments : {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Posts = mongoose.model("Posts", postsSchema);

export default Posts;
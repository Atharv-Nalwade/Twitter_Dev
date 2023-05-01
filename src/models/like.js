import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel: {
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']  // To know wether like is on a Tweet or Comment
    },
    likeable: {                               // To to which comment or tweet is liked
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'                    // As the reference is dynamic which can either be Tweet or Comment
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true});

const Like = mongoose.model('Like', likeSchema);

export default Like;
import mongoose from "mongoose";

const kdramaSchema = new mongoose.Schema({
    //* Enter schema
    title: {
        type: String,
        required: true
    },
    year: {
        type: String
    },
    genre: {
        type: String
    },
    actors: {
        type: String
    },
    translator:{
        type: String
    }
},

{timestamps:true});


export default mongoose.model('kdrama', kdramaSchema);

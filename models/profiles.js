import mongoose from "mongoose";

const profilesSchema = new mongoose.Schema({
    //* Enter schema


},

{timestamps:true});


export default mongoose.model('Profile', profilesSchema);

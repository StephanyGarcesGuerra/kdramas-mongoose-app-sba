import mongoose from "mongoose";

const translatorsSchema = new mongoose.Schema({
    //* Enter schema


},

{timestamps:true});


export default mongoose.model('Translators', translatorsSchema);

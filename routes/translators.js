import {Router} from 'express';
import Kdramas from '../models/kdramas'
import Translator from '../models/translators';
import Profile from '../models/profiles';


const router = new Router();

//* GET routes
router.get('/translator/:id', async(req,res)=>{
    const translator = await Translator.findById(req.params.id);

    if(!translator) return res.status(404).json({msg: "Translator not found in database, try again later or recheck profile ID!"});
    else res.json(translator);
});


//* POST
router.post('/translator/new', async (req,res) =>{
    try{
        const translator = await Translator.create(req.body);
        res.status(201).json(translator);
    
    } catch(err){
            console.log(err);
        }
    });


//* PUT
router.put('/translator/:id', async(req,res)=>{
    try{
    const{id}= req.params;
    const{body} = req;
    const updatedTranslator = await Translator.findByIdAndUpdate(id,body,{new: true});
        // adding {new:true} asks to have only the update data be returned
        res.json(updatedTranslator);
    } catch(err){
        console.log(err);
        res.json({msg: "Translator account not found not found!"})
    }
});



//* DELETE
router.delete('/translator/:id', async(req,res)=>{
    const {id}= req.params;
    try{
        const deletedTranslator = await Translator.findByIdAndDelete(id);
        res.json({msg:"Translator profile/account has been deleted", deletedTranslator});
    } catch(err){
        console.log(err);
    }
});


export default router;

import {Router} from 'express';
import Kdramas from '../models/kdramas'
import Translator from '../models/translators';
import Profile from '../models/profiles';


const router = new Router();

//* GET routes
router.get("/drama/:id", async(req,res)=>{
    const drama = await Kdramas.findById({})
    res.status(200).json(drama);
});



//* POST

router.post('/drama/new-drama', async(req,res)=>{
    // try{
        const newDrama = await Kdramas.create(req.body);
        res.status(201).json(newDrama);
    // } catch(err){
    //     console.log(err);
    // }
});

//* PUT
router.put('/drama/:id', async(req,res)=>{
    try{
    const{id}= req.params;
    const{body} = req;
    const updatedDrama = await Kdramas.findByIdAndUpdate(id,body,{new: true});
        res.json(updatedDrama);
    } catch(err){
        console.log(err);
        res.json({msg: "Drama not found!"})
    }
});



//* DELETE
router.delete('/drama/:id', async(req,res)=>{
    const {id}= req.params;
    try{
        const deletedDrama = await Kdramas.findByIdAndDelete(id);
        res.json({msg:"Drama deleted", deletedDrama});
    } catch(err){
        console.log(err);
    }
});


export default router;

import {Router} from 'express';
import Kdramas from '../models/kdramas'
import Translator from '../models/translators';
import Profile from '../models/profiles';


const router = new Router();

//* GET routes
router.get('/profile/:id', async(req,res)=>{
    const profile = await Profile.findById(req.params.id);

    if(!profile) return res.status(404).json({msg: "Profile not found, try again or check ID!"});
    else res.json(profile);
});


//* POST
router.post('/profile/new', async (req,res) =>{
    try{
        const profile = await Profile.create(req.body);
    //* can include the below if you want to call on the profile,
    //* such as test to see it is working when you " res.status(201).json(user,profile)"
        // const profile = await Profile.create({user_id: user._id});
        await Profile.create({user_id: user._id});
    
        res.status(201).json(profile);
    
    } catch(err){
            console.log(err);
        }
    });


//* PUT
router.put('/profile/:id', async(req,res)=>{
    try{
    const{id}= req.params;
    const{body} = req;
    const updatedProfile = await Profile.findByIdAndUpdate(id,body,{new: true});
        // adding {new:true} asks to have only the update data be returned
        res.json(updatedProfile);
    } catch(err){
        console.log(err);
        res.json({msg: "Profile not found, try again!"})
    }
});



//* DELETE
router.delete('/profile/:id', async(req,res)=>{
    const {id}= req.params;
    try{
        const deletedProfile = await Profile.findByIdAndDelete(id);
        res.json({msg:"Profile has been deleted", deletedProfile});
    } catch(err){
        console.log(err);
    }
});


export default router;

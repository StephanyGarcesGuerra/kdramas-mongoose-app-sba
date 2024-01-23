
import "./localenv.js";
import express from "express";
import {conn} from './db/conn.js'; conn();
import morgan from "morgan";

// import kdramaRoute from "./routes/kdramas.js";
// import profilesRoute from "./routes/profiles.js";
// import translators from "./routes/translators.js";

const app = express();
const port = process.env.port || 3000;



app.use(morgan('dev'));
app.use(express.json());

// app.use("/kdramas", kdramaRoute);
// app.use("/profiles", profilesRoute);
// app.use("/translators", translatorsRoute)

app.get("/", async(req,res)=>{
    res.send("Ready to watch Kdramas? Let's go!")
});




app.listen(port, () =>{
    console.log(`server up and running on port ${port}`)
});
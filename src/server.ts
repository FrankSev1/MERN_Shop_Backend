import express,{Express  } from "express";
const app:Express = express();
app.use("/",(req,res)=>{
    res.send("Hola mundo");
});

app.listen(4000,()=>{

    console.log("Server running at http://localhost:4000")
});



import express,{Express  } from "express";
const app:Express = express();
app.use("/",(req,res)=>{
    res.send("Hola mundo");
});

app.listen(3000, () => {
    console.log('Server started on port http://localhost:3000/');
});



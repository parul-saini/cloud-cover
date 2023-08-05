const express =require("express");
const path =require("path");
const app =express();
const hbs =require("hbs");
// const port = 8080; 
const port = process.env.PORT || 8000; //for hosting we have to consider it 



// public files path 
const staticFilePath = path.join(__dirname,"../public");

const templteFile_Path = path.join(__dirname,"../templates/views");

const partials_path = path.join(__dirname,"../templates/partials");



app.set('view engine','hbs');
app.set("views",templteFile_Path);

hbs.registerPartials(partials_path);

app.use(express.static(staticFilePath));

app.get("/",(req,res)=>{
    // res.send("welcome ");
    res.render("index");
})

app.get("/weather",(req,res)=>{
    res.render("weather");

})
app.get("/about",(req,res)=>{
    // res.send("welcome  about ");
    res.render("about");

})

app.get("/*",(req,res)=>{
    res.render("404error");

})

app.listen(port,()=>{
    console.log(`lsitening at ${port}`);
})




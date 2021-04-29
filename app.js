const express = require("express");
const app = express();
const hbs = require("hbs");
// const path = require('path');
const json=require('./data.json')
app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");
// app.set('views', path.join(__dirname, 'views'));


app.get("/", (req, res) => {
  res.render("index");
});

app.get('/projets',(req,res)=>{
  res.render("projets",{projets:json});
})

app.get('/projects/:id', (req,res)=>{
  console.log('id',req.params.id)
  // trouver dans le tableau json, l'obejt dont l'id est req.praams.id
  let theProject
  for (let i=0; i<json.length;i++){
      if (json[i].id===req.params.id){
          theProject=json[i];
          break;
      } 
  }
  // theProject = json.find(function (el) {return req.params.id === el.id})
  res.render('detail',{
      data: theProject
  })
})

app.listen(3000, () => console.log("Server ready: listen on port 3000"));

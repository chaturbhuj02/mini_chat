const express = require("express");
const app = new express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

main().then(res => console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
};

//index route
app.get("/chats", async (req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", {chats});
});

// let chat1 = new Chat({
//     from: "Rohan",
//     to: "Priya",
//     msg: "Any cheating tips",
//     created_at: new Date()
// });

// chat1.save().then(res=>console.log(res)).catch(err=>console.log(err));

let port = 8080;

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});

app.get("/", (req, res)=>{
    res.send("Hello World");
});

const mongoose = require("mongoose");
const Chat = require("./models/chat");

main().then(res => console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
};

let allChats = [{
    from: "Neha",
    to: "Neeti",
    msg: "Any cheating tips",
    created_at: new Date()
},
{
    from: "Rohit",
    to: "Preeti",
    msg: "Chakde fatte",
    created_at: new Date()
},
{
    from: "Amit",
    to: "Mohit",
    msg: "all the best",
    created_at: new Date()
},
{
    from: "Vishal",
    to: "Suman",
    msg: "whats going on!!",
    created_at: new Date()
},
{
    from: "Sagar",
    to: "Balkar",
    msg: "Send me exam dates",
    created_at: new Date()
},
];

Chat.insertMany(allChats);


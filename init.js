const mongoose = require('mongoose');
const Chat = require("./models/chat.js"); // Corrected path
main()
    .then( () => {
        console.log("connection successful");
    })
    .catch ((err) => {
        console.log(err);
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = [
    {
        from: "neha",
        to: "mega",
        msg: "send me notes",
        created_at: new Date(),
    },
    {
        from: "tom",
        to: "mega",
        msg: "send me notes",
        created_at: new Date(),
    },
    {
        from: "ron",
        to: "mega",
        msg: "hello",
        created_at: new Date(),
    },
    {
        from: "neha",
        to: "mega",
        msg: "send me notes",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
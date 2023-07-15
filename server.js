const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data.js/dummyData");
const app = express();

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.get("/api/chat", (req, res) => {
  res.json(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const singleChat = chats.find((c) => c._id === id);
  res.json(singleChat);
});

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`Server started on PORT ${PORT}`));

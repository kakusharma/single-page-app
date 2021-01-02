const express = require("express");
const path = require("path");

const app = express();

app.use("/include", express.static(path.resolve(__dirname, "src", "include")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(3000, () => console.log("Server running..."));
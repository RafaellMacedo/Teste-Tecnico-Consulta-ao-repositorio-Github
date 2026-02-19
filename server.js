const express = require("express");
const app = express();
const pool = require("./db");

app.get("/", (req, res) => {
    res.send("🚀 Node.js rodando no Docker!");
});

app.get("/select", async (req, res) => {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
});

app.listen(5000, () => console.log("Server running on port 5000"));
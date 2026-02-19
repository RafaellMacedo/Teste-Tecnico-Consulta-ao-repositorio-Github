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

app.get("/repositories", async (req, res) => {
    const response = await fetch('https://api.github.com/users/' + req.query.username + '/repos');

    if (!response.ok) {
        return res.status(response.status).json({
            error: "Erro ao acessar API externa"
        });
    }

    const data = await response.json();

    if (!data || (Array.isArray(data) && data.length === 0)) {
        return res.json({ message: "Nenhum dado encontrado" });
    }

    const todosRepositorios = [];

    data.forEach((repo, index) => {
        if (index < 20) {
            todosRepositorios.push({
                name: repo.name,
                url: repo.html_url,
                description: repo.description,
                language: repo.language,
                start: repo.stargazers_count,
                last_update: repo.updated_at
            });
        }
    });

    res.json(todosRepositorios);
});

app.listen(5000, () => console.log("Server running on port 5000"));
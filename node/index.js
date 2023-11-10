const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  // Consulta o banco de dados para obter as pessoas cadastradas
  connection.query("SELECT * FROM people", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao buscar pessoas cadastradas.");
      return;
    }

    const people = result.map((row) => row.name);
    const html = `<h1>Full Cycle Rocks!</h1><p>${people.join(", ")}</p>`;
    res.send(html);
  });
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});

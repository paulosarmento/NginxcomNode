-- Use o banco de dados 'nodedb'
USE nodedb;

-- Crie a tabela 'people' se não existir
CREATE TABLE IF NOT EXISTS people (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  PRIMARY KEY (id)
);

INSERT INTO people(name) VALUES ('Paulo'), ('Zezinho'), ('Xuxa da Silva');

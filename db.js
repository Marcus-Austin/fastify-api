import { Client } from "pg";

// Configuração do cliente PostgreSQL
const client = new Client({
  host: "localhost", // Substitua pelo host do seu banco de dados
  port: 5432, // Porta padrão do PostgreSQL
  user: "postgres", // Substitua pelo seu usuário do PostgreSQL
  password: "Minhavida222", // Substitua pela sua senha do PostgreSQL
  database: "api-db", // Substitua pelo nome do seu banco de dados
});

// Conectando ao banco de dados
client
  .connect()
  .then(() => console.log("Conectado ao banco de dados PostgreSQL"))
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

export default client;

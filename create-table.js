import client from './db.js';

const createTableQuery = `
  CREATE TABLE VIDEO (
    title TEXT,
    description TEXT,
    duration INTEGER
  );
`;

client.query(createTableQuery)
  .then(() => {
    console.log('Tabela VIDEO criada com sucesso!');
    client.end(); // Encerra a conexão após a execução
  })
  .catch(err => {
    console.error('Erro ao criar a tabela:', err);
    client.end(); // Encerra a conexão mesmo em caso de erro
  });
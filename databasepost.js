import { randomUUID } from "node:crypto";
import client from "./db.js";

export class Database {
  async list(search) {
    try {
      const query = search
        ? `SELECT * FROM VIDEO WHERE title ILIKE $1`
        : `SELECT * FROM VIDEO`;
      const values = search ? [`%${search}%`] : [];
      const result = await client.query(query, values);
      return result.rows;
    } catch (err) {
      console.error("Erro ao listar vídeos:", err);
      throw err;
    }
  }

  async create(video) {
    try {
      const id = randomUUID();
      const query = `INSERT INTO VIDEO (title, description, duration) VALUES ($1, $2, $3)`;
      const values = [video.title, video.description, video.duration];
      await client.query(query, values);
      console.log("Vídeo criado com sucesso!");
      return id;
    } catch (err) {
      console.error("Erro ao criar vídeo:", err);
      throw err;
    }
  }

  async update(id, video) {
    try {
      const query = `UPDATE VIDEO SET title = $1, description = $2, duration = $3 WHERE id = $4`;
      const values = [video.title, video.description, video.duration, id];
      await client.query(query, values);
      console.log("Vídeo atualizado com sucesso!");
    } catch (err) {
      console.error("Erro ao atualizar vídeo:", err);
      throw err;
    }
  }

  async delete(id) {
    try {
      const query = `DELETE FROM VIDEO WHERE id = $1`;
      const values = [id];
      await client.query(query, values);
      console.log("Vídeo deletado com sucesso!");
    } catch (err) {
      console.error("Erro ao deletar vídeo:", err);
      throw err;
    }
  }
}

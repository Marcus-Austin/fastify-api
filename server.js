import { fastify } from "fastify";
import { database as Database } from "./database.js";
import { title } from "node:process";
const server = fastify();

const database = new Database();
server.post("/video", (req, res) => {
  database.create({
    title: "video 01",
    description: "this is 01 video",
    duration: 120,
  });
  console.log(database.list());
  return res.status(201).send();
});

server.get("/video", () => {
  return "hello world from server";
});

server.put("/video/:id", () => {
  return "hello world from put";
});

server.delete("/video/:id", () => {
  return "hello world from delete";
});

server.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server listening on http://localhost:3000");
});

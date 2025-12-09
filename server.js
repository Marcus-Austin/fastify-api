import { fastify } from "fastify";
import { database as Database } from "./database.js";
import { title } from "node:process";
const server = fastify();

const database = new Database();
server.post("/video", (req, res) => {
    const {title,description,duration} = req.body;
  database.create({
    title: title,
    description: description,
    duration: duration,
  });
  console.log(database.list());
  return res.status(201).send();
});

server.get("/video", (req, res) => {
    const video = database.list(search);
    const search = req.query.search;
    if(search){
        return video.filter((video) => video.title.toLowerCase().includes(search.toLowerCase()));
    }
     console.log(video);
      return video;
});

server.put("/video/:id", (req, res) => {
  const videoid = req.params.id;

  const {title,description,duration} = req.body;
    database.update(videoid, {
        title: title,
        description: description,
        duration: duration,
      });
      return res.status(204).send();
});

server.delete("/video/:id", (req, res) => {
  const videoid = req.params.id;
  database.delete(videoid);
  return res.status(204).send();
});

server.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server listening on http://localhost:3000");
});

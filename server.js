import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

// ✅ yahan apni JSON file ka naam likho — exactly jaisa hai
const router = jsonServer.router(path.join(__dirname, "Product-list.json"));
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});

export default server;
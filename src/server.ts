import { createApp } from "./app";
import { log } from "./middleware/logger";

const PORT = process.env.PORT || 8000;
const server = createApp();

server.listen(PORT, () => {
  log.info(`Server running on http://localhost:${PORT}`);
});

export default server;

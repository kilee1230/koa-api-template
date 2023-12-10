import { agent } from "supertest";

import { createApp } from "./app";

describe("GET /health", () => {
  const server = createApp().listen(3000);
  const request = agent(server);

  afterAll(() => {
    server.close();
  });

  it("responds with 200 OK", async () => {
    await expect(request.get("/health")).resolves.toMatchObject({
      status: 200
    });
  });
});

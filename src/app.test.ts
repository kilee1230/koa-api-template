import { createApp } from "./app";
import supertest from "supertest";

describe("GET /health", () => {
  const server = createApp().listen(3000);
  const request = supertest.agent(server);

  afterAll(() => {
    server.close();
  });

  it("responds with 200 OK", async () => {
    await expect(request.get("/health")).resolves.toMatchObject({
      status: 200,
    });
  });
});

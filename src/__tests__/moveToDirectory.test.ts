import supertest from "supertest";
import app from "../app";

describe("move todo to directory", () => {
    test("It should move todo to directory", async () => {
        const response = await supertest(app)
          .post("/todo-item/move-to-directory")
          .send({ todoId: "test", directoryId: "test" });
        expect(response.statusCode).toBe(200);
    });
})
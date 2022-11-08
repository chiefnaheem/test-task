import supertest from "supertest";
import app from "../app";

describe("create todo", () => {
    test("It should create todo", async () => {
        const response = await supertest(app).post("/todo-item/create").send({ title: "test", userId: "test", directoryId: "test" });
        expect(response.statusCode).toBe(200);
    });
})
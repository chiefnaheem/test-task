import supertest from "supertest";
import app from "../app";

describe("list to-do", () => {
    test("It should list to-do", async () => {
        const response = await supertest(app).get("/todo-item/list").send({ directoryId: "test" });
        expect(response.statusCode).toBe(200);
    });
})
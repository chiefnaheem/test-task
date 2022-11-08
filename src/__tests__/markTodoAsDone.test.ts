import supertest from "supertest";
import app from "../app";

describe("mark todo as done", () => {
    test("It should mark todo as done", async () => {
        const response = await supertest(app).put("/todo-item/mark-as-done").send({ id: "test" });
        expect(response.statusCode).toBe(200);
    });
})
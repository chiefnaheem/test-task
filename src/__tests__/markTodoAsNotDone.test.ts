import supertest from "supertest";
import app from "../app";

describe("mark todo as not done", ()=> {
    test("It should mark todo as not done", async () => {
        const response = await supertest(app).put("/todo-item/mark-as-not-done").send({ id: "test" });
        expect(response.statusCode).toBe(200);
    });
})
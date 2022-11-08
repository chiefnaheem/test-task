import supertest from "supertest";
import app from "../app";

describe("list directories", () => {
    test("It should list directories", async () => {
        const response = await supertest(app).get("/directory/list").send({ userId: "test" });
        expect(response.statusCode).toBe(200);
    });
})
import supertest from "supertest";
import app from "../app";

describe("delete directory", () => {
    test("It should delete directory", async () => {
        const response = await supertest(app).delete("/directory/remove").send({ id: "test" });
        expect(response.statusCode).toBe(200);
    });
})
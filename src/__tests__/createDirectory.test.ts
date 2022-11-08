import supertest from "supertest";
import app from "../app";

describe ("create directory", () => {
    test("It should create directory", async () => {
        const response = await supertest(app).post("/directory/create").send({ name: "test", userId: "test" });
        expect(response.statusCode).toBe(200);
    });
    }
})
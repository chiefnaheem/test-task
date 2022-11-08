import supertest from "supertest";
import app from "../app";

describe("Test the root path", () => {
    test("It should response the GET method", async () => {
        const response = await supertest(app).get("/");
        expect(response.statusCode).toBe(200);
    });
    }
);

describe ("create directory", () => {
    test("It should create directory", async () => {
        const response = await supertest(app).post("/directory/create").send({ name: "test", userId: "test" });
        expect(response.statusCode).toBe(200);
    });
    }
})
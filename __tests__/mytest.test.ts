import app from "../index";
import supertest from "supertest";
import * as util from "../util";

describe("GET /", () => {
  it("should return all products", async () => {
    const mock = jest.spyOn(util, "add");
    const res = await supertest(app).get("/");
    expect(mock).toBeCalledTimes(1);
    expect(res.status).toBe(200);
  });
});

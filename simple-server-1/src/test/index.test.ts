import { describe, expect, it } from '@jest/globals'
import request from "supertest";
import { app } from '../index.js';

describe("test for express", () => {
    it("test for sum endpont", async () => {
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3)
    })
})
# Express testing

#### Example express app

```js
import express from "express";

const app = express();

app.get("/endpoint", (req, res) => {
	res.json({ key: "value" });
});

```


### Example testing code

```js
import request from "supertest";
import app from "./app";

describe("app", () => {

	it("should GET /endpoint", async () => {
		const response = await request(app).get("/endpoint");

		expect(response.status).toBe(200);
		expect(response.body).toEqual({ key: "value" });
	});

});

```

const db = require("./conn");

class Test {
	constructor(id, test) {
		this.id = id;
		this.test = test;
	}
	static async getInfo() {
		try {
			const response = await db.any(`SELECT * FROM test`);
			return response;
		} catch (err) {
			return err.message;
		}
	}
}
module.exports = Test;

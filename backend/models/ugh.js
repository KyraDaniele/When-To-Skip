const db = require("./conn");

class Ugh {
	constructor(id, name, phrase) {
		this.id = id;
		this.test = test;
		this.phrase = phrase;
	}
	static async getInfo() {
		try {
			const response = await db.any(`SELECT * FROM ugh`);
			return response;
		} catch (err) {
			return err.message;
		}
	}
}
module.exports = Ugh;

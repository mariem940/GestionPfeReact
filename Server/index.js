const express = require("express")
const routes = require("./routes/annee.route")

function createServer() {
	const app = express()
	app.use(express.json())
	app.use("/api", routes)
	return app
}

module.exports = createServer
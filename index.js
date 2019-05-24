const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const config = require("./config");

const app = express();

app.use(bodyParser.json());

require("./app")(app);

mongoose
	.connect(config.mongoURI, { useNewUrlParser: true })
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

const PORT = config.PORT || 9000;

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));

const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

//Env Configuration
const currentEnv = require('./app/config/index');
console.log("current env file", currentEnv);


app.use(express.json())

app.get('/', (req, res) => { res.send("Client Auth System Server STATUS:[UP]") })

function setupRoute() {
    const routes = require("./app/router");
    routes.setup(app);
}
setupRoute();


const port = currentEnv.PORT;
app.listen(port, () => {
	console.log(`${currentEnv.SERVER_STARTED} On PORT: ${port}`);
});
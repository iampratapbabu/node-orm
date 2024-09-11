const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.use(express.json())

app.get('/',(req,res)=>{
	res.send("Node orm Server Status UP");
})

function setupRoute() {
    const routes = require("./app/router");
    routes.setup(app);
}
setupRoute();


const PORT = process.env.PORT
app.listen(PORT,()=>{
	console.log("Server Started On PORT:",PORT);
});

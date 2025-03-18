let envConfig;
if (process.env.NODE_ENV === "development") {
	envConfig = require('./dev.json');
} else if (process.env.NODE_ENV === "testing") {
	envConfig = require('./uat.json');
}else if (process.env.NODE_ENV === "production") {
	envConfig = require('./prod.json');
}

module.exports = envConfig;

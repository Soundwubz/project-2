var dotenv = require("dotenv");
dotenv.config();

module.exports = {
  ravAccessKey: process.env.RAVELRY_ACCESS,
  ravPersonalKey: process.env.RAVELRY_PERSONAL,
  gitClientID: process.env.GIT_CLIENT_ID,
  gitClientSecret: process.env.GIT_CLIENT_SECRET
};

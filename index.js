require("dotenv").config();
const app = require("./app");
app.listen(process.env.PORT, async () => {
  console.log(
    "Server is up and listening on port : " +
    process.env.PORT
  );
});
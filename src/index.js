const express = require("express");

const usersRoutes = require("./routes/users.js");
const middlewareLog = require("./middleware/logs.js");

const app = express();

app.use("/", middlewareLog);
app.use(express.json());
app.use("/users", usersRoutes);
app.listen(4000, () => {
  console.log("server berhasil berjalan");
});

const express = require("express");
const app = express();

const routerOrder = require("./routes/order");
const routerUser = require("./routes/user");

app.use("/orders", routerOrder);
app.use("/userss", routerUser);
// Start the server
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

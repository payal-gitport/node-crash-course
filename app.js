const express = require("express");

//express app
const app = express();

//listen for request
app.listen(3000);

app.get("/", (req, res) => {
  //res.send("<p>Home Page</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //res.send("<p>About Page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page -- should always be in the last of file
//it will show 404 for every req that comes here or doesn't match any of above
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");

const PORT = process.env.port || 5000;

// Set view engine
app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article 1",
      createdAt: new Date(),
      description: "test description",
    },
    {
      title: "Test Article 2",
      createdAt: new Date(),
      description: "test description",
    },
    {
      title: "Test Article 3",
      createdAt: new Date(),
      description: "test description",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.listen(PORT);

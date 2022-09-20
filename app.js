const express = require("express");
const db = require("./models");
const app = express();
const PORT = 3000;
//Following lines are to make sure our app can parse the json data
app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.post("/teams", async (req, res) => {
  const data = req.body;
  try {
    const teams = await db.Teams.create(data);
    res.send(teams);
  } catch (err) {
    res.send(err);
  }
});

// app.post("/user", async (req, res) => {
//   const data = req.body;
//   try {
//     const user = await db.User.create(data);
//     res.send(user);
//   } catch (err) {
//     res.send(err);
//   }
// });

app.post("/players", async (req, res) => {
  const data = req.body;
  try {
    const posts = await db.Players.create(data);
    res.send(posts);
  } catch (err) {
    res.send(err);
  }
});

// app.get('/user', async (req, res) => {
//   try {
//     const user = await db.User.findAll();
//     res.send(user);
//   } catch (err) {
//     res.send(err);
//   }
// })
app.get("/teams", async (req, res) => {
  try {
    const user = await db.Teams.findAll();
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

// app.get('/user', async (req, res) => {
//   try {
//     const user = await db.User.findAll({
//       include: [db.Post]
//     });
//     res.send(user);
//   } catch (err) {
//     res.send(err);
//   }
// })

app.get("/team/", async (req, res) => {
  try {
    const user = await db.Teams.findAll({
      include: [db.Players],
    });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

app.get("/team/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await db.Teams.findAll({
      include: [db.Players],
      where: {id}
    });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

db.sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, () => {
      console.log("Server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });

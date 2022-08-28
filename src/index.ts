import express from "express";
import cors from "express";

const app = express();

app.use(express.json());
app.use(cors());

const users: { [key: string]: any } = {
  asyd: {
    name: "User",
    age: 55,
    isActive: true,
    id: "asyd",
  },
};

app.get("/users", (_req, res) => {
  res.json(Object.values(users));
});
app.post("/users", (req, res) => {
  const newUser = req.body;
  users[newUser.id] = newUser;
  res.json(newUser);
});
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const deletedUser = users[userId];
  delete users[userId];
  res.json(deletedUser);
});
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const newUser = req.body;
  users[userId] = newUser;
  res.json(newUser);
});

app.get("/", (_req, res) => {
  res.json({ message: "success" });
});

app.listen(3333, () => {
  console.log("listening on http://localhost:3333");
});

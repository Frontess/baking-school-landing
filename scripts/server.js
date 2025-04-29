const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Простые данные для авторизации
const users = [{ email: "user@example.com", password: "12345" }];

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ message: "Успешный вход" });
  } else {
    res.status(401).json({ message: "Неверный email или пароль" });
  }
});

app.listen(PORT, () =>
  console.log(`Сервер работает на http://localhost:${PORT}`)
);

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_app",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/setpost", (req, res) => {
  const { News_title, News_Author, News_Content } = req.body;
  const sqlInsertNews =
    "INSERT INTO newses (News_title,News_Author,News_Content) VALUES (?,?,?)";
  db.query(
    sqlInsertNews,
    [News_title, News_Author, News_Content],
    (error, result) => {
      if (error) {
        console.log(error);
      }
    }
  );
});

app.get("/api/getnews/:author", (req, res) => {
  const author = req.params;
  const sqlgetNews = "SELECT * FROM newses WHERE News_Author=?";
  db.query(sqlgetNews, [author], (error, result) => {
    res.send(result);
  });
});

app.put("/api/editnews/:id", (req, res) => {
  const { id } = req.params;
  const { News_title, News_Author, News_Content } = req.body;
  const sqleditnews =
    "UPDATE newses SET News_title=?,News_Author=?,News_Content=? WHERE News_ID=?";
  db.query(
    sqleditnews,
    [News_title, News_Author, News_Content, parseInt(id)],
    (error, result) => {
      res.send(result);
      if (error) {
        console.log(error);
      }
    }
  );
});

app.delete("/api/deletenews/:id", (req, res) => {
  const { id } = req.params;
  const sqldeleteNews = "DELETE FROM newses WHERE News_ID = ?";
  db.query(sqldeleteNews, parseInt(id), (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.get("/api/getnewses", (req, res) => {
  const sqlGetNewses = "SELECT * FROM newses";
  db.query(sqlGetNewses, (error, result) => {
    res.send(result);
  });
});

app.get("/api/getusers", (req, res) => {
  const sqlgetUsers = "SELECT * FROM user_db";
  db.query(sqlgetUsers, (error, result) => {
    res.send(result);
  });
});

app.get("/api/getuser", (req, res) => {
  const sqlgetUser = "SELECT * FROM user_db where id=2";
  db.query(sqlgetUser, (error, result) => {
    res.send(result);
  });
});

app.post("/api/auth/reg", (req, res) => {
  const { username, email, password } = req.body;
  const sqlInsertUser =
    "INSERT INTO user_db (username,email,password) VALUES (?,?,?)";
  db.query(sqlInsertUser, [username, email, password], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.post("/api/auth/login", (req, res) => {
  const username1 = req.body.username;
  const password1 = req.body.password;
  const sqlfindUser =
    "SELECT username,password from user_db WHERE username=? AND password=?";
  db.query(sqlfindUser, [username1, password1], (error, result) => {
    res.send(result);
  });
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

const e = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

//middleware parser
app.use(express.urlencoded({ extended: true }));

app.get("/form", (req, res) => {
  res.send(
    `<form action="/submit" method="POST">
      <label for="username">Username: </label>
      <input type="text" id="username" name="username" required></input>
      <br></br>
      <label for="email">Email: </label>
      <input type="text" id="email" name="email" required></input>
      <br></br>

      <label for="comments">Comments: </label>
      <input type="text" id="comments" name="comments"></input>
      <br></br>

      <legend>Opt in to Newsletter?</legend>
      <input type="radio" id="newsletterYes" name="newsletter" value ="Yes"></input>
      <label for="newsletter">Yes, opt me in for the newsletter!</label>
      <input type="radio" id="newsletterNo" name="newsletter" value = "No"></input>
      <label for="newsletter">No thanks!</label>

      <br></br>
      <button type="submit">Submit</button>
    </form>`
  );
});

app.post("/submit", (req, res) => {
  const { username, email, comments, newsletter } = req.body;

  const newsletterResponse =
    newsletter === "Yes" ? "Yes, Opt me in!" : "No, thank you";
  res.send(`
    <div>
      <h1>Form Submitted!</h1>
      <p>Username: ${username}</p>
      <p>Email: ${email}</p>
      <p>Comments: ${comments || "n/a"}</p>
      <p>Newsletter: ${newsletterResponse}</p>
    </div>
  `);
});

app.use((req, res) => {
  res.status(404).send("404 - Page not found");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

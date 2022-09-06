const express = require("express");
const app = express();
const path = require("path");
const simpleGit = require("simple-git");
const moment = require("moment");
const fs = require("fs");
// middleware
app.use(express.json());
app.use(express.urlencoded());

app.post("/api", async (req, res) => {
  let dates = req.body.dates;
  let dayData = req.body.dayData;
  await commit(dates, dayData);
  console.log("sent");
  res.send([dates, dayData]);
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.listen(8080, () => {
  console.log("Started Successfully ");
  console.log("Visit the Site: http://localhost:8080/");
});
async function commit(dates, dayData) {
  var current = new Date(dates.start);
  var end = new Date(dates.end);
  dates = [];
  while (current < end) {
    var day = current.getDay();
    if (dayData[day]["modify"]) {
      let base = parseInt(dayData[day]["commits"]);
      let v = parseInt(dayData[day]["variance"]);
      var iter = Math.max(
        0,
        base + Math.floor(Math.random() * (v + 1) * 2 - v + 1)
      );
      var date = new Date(current).toString();
      dates.push({ date, iter });
    }
    current = moment(current).add(1, "d").toDate();
  }
  async function commitAll(data) {
    lL = data.length
    async function dayCommits(date, num) {
      while (num > 0) {
        fs.appendFile("CommitsFile.txt", "data to append", () => {
        });
        await simpleGit()
          .add(["CommitsFile.txt"], () => {
          })
          .commit(
            "commit " + num,(options = { "--date": date }),
            () => {
            }
          );
        num--;
      }
    }
    for (i = 0; i < data.length; i++) {
      console.log(`${i+1} days of ${lL}`)
      await dayCommits(data[i].date, data[i].iter);
    }
    await simpleGit().push(()=>{console.log("Pushed")})
  }
  await commitAll(dates);
}

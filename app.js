var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));
var resultArray = '{"outcome":"result","wins":0,"losses":0,"ties":0}';
var gameArray = ["rock", "paper", "scissors", "lizard", "spock"];
var resultJSON = JSON.parse(resultArray);

app.use(bodyParser.urlencoded({
    extended: false
}));

function gameLogic(requestEle, resultJSON, gameArray) {
    var selectEle = gameArray[Math.floor(Math.random() * gameArray.length)];
    //console.log("Selected From Server :" +selectEle);
    if(requestEle === selectEle)
    {
      resultJSON.outcome = "ties";
      resultJSON.ties += 1;
    }
    else
    {
    if (requestEle === "rock") {
        if (selectEle === "scissors" || selectEle === "lizard") {
            resultJSON.outcome = "win";
            resultJSON.wins += 1;
        }else {
            resultJSON.outcome = "losses";
            resultJSON.losses += 1;
        }
    } else if (requestEle === "paper") {
        if (selectEle === "rock" || selectEle === "spock") {
            resultJSON.outcome = "win";
            resultJSON.wins += 1;
        }else {
            resultJSON.outcome = "losses";
            resultJSON.losses += 1;
        }
    } else if (requestEle === "scissors") {
        if (selectEle === "paper" || selectEle === "lizard") {
            resultJSON.outcome = "win";
            resultJSON.wins += 1;
        }else {
            resultJSON.outcome = "losses";
            resultJSON.losses += 1;
        }
    } else if (requestEle === "lizard") {
        if (selectEle === "paper" || selectEle === "spock") {
            resultJSON.outcome = "win";
            resultJSON.wins += 1;
        }else {
            resultJSON.outcome = "losses";
            resultJSON.losses += 1;
        }
    } else if (requestEle === "spock") {
        if (selectEle === "scissors" || selectEle === "rock") {
            resultJSON.outcome = "win";
            resultJSON.wins += 1;
        } else {
            resultJSON.outcome = "losses";
            resultJSON.losses += 1;
        }
    } else {
        resultJSON = {};
    }
  }
    return resultJSON;
}
app.get('/result', function(res) {
    res.json(resultJSON);
    console.log(resultJSON);
})
app.post('/play/:element', function(req, res) {
    var requestEle = req.params.element;
    resultJSON = gameLogic(requestEle, resultJSON, gameArray);
    res.json(resultJSON);
    console.log(resultJSON);
})
app.listen(3000);

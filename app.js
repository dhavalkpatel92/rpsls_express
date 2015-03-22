var express = require('express');

var app = express();

app.use(express.static('public'));
var resultArray = '{"outcome":"John","wins":0,"losses":0,"ties":0}';
var gameArray = ["rock", "paper", "scissors", "lizard", "spock"];
var resultJSON = JSON.parse(resultArray);


//app.engine('html', require('ejs').renderFile);

//app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(app.router);

function gameLogic(requestEle, resultJSON, gameArray) {
    var selectEle = gameArray[Math.floor(Math.random() * gameArray.length)];
    //console.log("Selected From Server :" +selectEle);
    if (requestEle === "rock") {
        if (selectEle === "scissors" || selectEle === "lizard") {
            resultJSON.outcome = "win";
            resultJSON.wins += 1;
        } else if (selectEle === "rock") {
            resultJSON.outcome = "ties";
            resultJSON.ties += 1;

        } else {
            resultJSON.outcome = "losses";
            resultJSON.losses += 1;
        }
    } else if (requestEle === "paper") {
        if (selectEle === "rock" || selectEle === "spock") {
            resultJSON.outcome = "win";
            resultJSON.wins += 1;
        } else if (selectEle === "paper") {
            resultJSON.outcome = "ties";
            resultJSON.ties += 1;

        } else {
            resultJSON.outcome = "losses";
            resultJSON.losses += 1;
        }
    } else if (requestEle === "scissors") {
        if (selectEle === "paper" || selectEle === "lizard") {
            resultJSON.outcome = "win";
            resultJSON.wins += 1;
        } else if (selectEle === "scissors") {
            resultJSON.outcome = "ties";
            resultJSON.ties += 1;

        } else {
            resultJSON.outcome = "losses";
            resultJSON.losses += 1;
        }
    } else if (requestEle === "lizard") {
        if (selectEle === "paper" || selectEle === "spock") {
            resultJSON.outcome = "win";
            resultJSON.wins += 1;
        } else if (selectEle === "lizard") {
            resultJSON.outcome = "ties";
            resultJSON.ties += 1;

        } else {
            resultJSON.outcome = "losses";
            resultJSON.losses += 1;
        }
    } else if (requestEle === "spock") {
        if (selectEle === "scissors" || selectEle === "rock") {
            resultJSON.outcome = "win";
            resultJSON.wins += 1;
        } else if (selectEle === "spock") {
            resultJSON.outcome = "ties";
            resultJSON.ties += 1;

        } else {
            resultJSON.outcome = "losses";
            resultJSON.losses += 1;
        }
    } else {
        resultJSON = {};
    }
    return resultJSON;
}

app.post('/play/:element', function (req, res) {
  //console.log(req.params.element);
  var requestEle = req.params.element;

  resultJSON = gameLogic(requestEle, resultJSON, gameArray);

  //res.writeHead(200, {"Content-Type": "application/json"});
  res.json(resultJSON);
  console.log(resultJSON);
  //res.write("asdsd");
  //res.write(req.params.element);
})


app.listen(3000);

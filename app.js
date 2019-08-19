let express = require('express');

let app = express();

let db = [];

// localhost:8080/addNo/80    : to add a new nymber to the db
// localhost:8080/deleteNo/80  : to delete a number // the first occ
//localhost:8080/deleteById/123  : delete a number by its ID
// localhost:8080/listAll    : to get all the number and their ids


app.get("/deleteNo/:number2Delete", function (req, res) {

    let found = false;
    for (let i = 0; i < db.length && !found; i++) {
        if (db[i].no === parseInt(req.params.number2Delete)) {
            db.splice(i, 1);
            found = true;
        }
    }

    let msg = "";
    if (found) {
        msg = "We deleted your number!!!";
    } else {
        msg = "Sorry!! we could not find it!!"
    }
    res.send(msg);

});

app.get('/addNo/:number', function (req, res) {
    let theId = getNewRandomId();
    let obj = {
        id: theId,
        no: parseInt(req.params.number)
    };
    console.log(obj);
    db.push(obj);
    res.send("Thank you!!!");
});


app.get("/listAll", function (req, res) {

    let st = "";
    for (let i = 0; i < db.length; i++) {
        st += (i) + " - " + db[i].id + " | " + db[i].no + "<br>";
    }

    res.send(st);
});

function getNewRandomId() {
    let id;
    id = Math.round(Math.random() * 1000);
    return id;
}

app.listen(8080);
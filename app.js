let express=require('express');

let app=express();

let db=[];

// localhost:8080/addNo/80    : to add a new nymber to the db
// localhost:8080/deleteNo/80  : to delete a number // the first occ
//localhost:8080/deleteById/123  : delete a number by its ID
// localhost:8080/listAll    : to get all the number and their ids


app.get('/addNo/:number',function(req,res){
        let theId=getNewRandomId();
        let obj={id:theId,no:parseInt(req.params.number)};
        console.log(obj);
        db.push(obj);
        res.send("Thank you!!!");        
});


function getNewRandomId(){
    let id;
    id=Math.round(Math.random()*1000);
    return id;
}

app.listen(8080);
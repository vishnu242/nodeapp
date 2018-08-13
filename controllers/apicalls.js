var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();

router.use(bodyParser.json());
router.use(cors());

var employees = [];
// employee = {id:1,firstname:"heaven",lastname:"hell",emailaddress:"abc@abc.com",contactno:12345678,age:21}

router.get('/', function(req, res){
  console.log("sending employees list");
   res.send(employees);
});

//insert the new employee details...
router.post('/add', function(request, response){
  console.log(request.body);
  var id = employees.length + 1;
  var emp = {"id":id,firstname:request.body.firstname,lastname:request.body.lastname,emailaddress:request.body.emailaddress
            ,contactno:request.body.contactno,age: request.body.age};
  employees.push(emp);
  response.send('Successful insertion into in-memory datastructure');
});

//update an existing employee details...
router.put('/update', function(request, response){
  console.log(request.body);
  var id = request.body.id;
  var emp = {id:id,firstname:request.body.firstname,lastname:request.body.lastname,emailaddress:request.body.emailaddress
            ,contactno:request.body.contactno,age: request.body.age};
            updateEmployee(id,emp);
  response.send('Successful updation into in-memory datastructure');
});

//delete an existing employee
router.delete('/delete', function(request, response){
  console.log(request.body);
  var id = request.body.id;
  deleteEmployee(id);
  response.send('Successful deletion from in-memory datastructure');
});

function updateEmployee(id,emp) {
  for (var i in employees) {
    if (employees[i].id == id) {
       employees[i] = emp;
       break; //Stop this loop, we found it!
    }
  }
}

function deleteEmployee( id ) {
  for (var i in employees) {
    if (employees[i].id == id) {
       employees.splice(i,1);
       break; //Stop this loop, we found it!
    }
  }
}




//export this router to use in our index.js
module.exports = router;

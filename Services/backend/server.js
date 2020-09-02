const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const ticketsRoutes = express.Router();

const PORT = 4000;
const mongoose = require("mongoose");

let TrainSchedule = require("./modleSchedule");
let TicketReserve = require("./modleReserve");
let PaySampath = require("./modleSampathPay");
let PayDialog = require("./modleDialogPay");

//database connection
mongoose.connect("mongodb://127.0.0.1:27017/ticketDB", {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.use(cors());
app.use(bodyParser.json());

app.use("/ticketDB", ticketsRoutes);

//endpoints for Schedule schema*********************
ticketsRoutes.route("/schedule").get(function(req, res) {
  TrainSchedule.find(function(err, ticketDB) {
    if (err) {
      console.log(err);
    } else {
      res.json(ticketDB);
    }
  });
});

ticketsRoutes.route("/schedule/:id").get(function(req, res) {
  let id = req.params.id;
  TrainSchedule.findById(id, function(err, ticketDB) {
    res.json(ticketDB);
  });
});

ticketsRoutes.route("/schedule/add").post(function(req, res) {
  let ticketDB = new TrainSchedule(req.body);
  ticketDB
    .save()
    .then(ticketDB => {
      res
        .status(200)
        .json({ ticketDB: "Data added to schedule schema successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new data to schedule failed");
    });
});

ticketsRoutes.route("/schedule/update/:id").post(function(req, res) {
  TrainSchedule.findById(req.params.id, function(err, ticketDB) {
    if (!ticketDB) {
      res.status(404).send("Schedule data is not found");
    } else {
      ticketDB.train_code = req.body.train_code;
      ticketDB.train_route = req.body.train_route;
      ticketDB.departure_time = req.body.departure_time;
      ticketDB.arrival_time = req.body.arrival_time;
      ticketDB.ticket_price = req.body.ticket_price;

      ticketDB
        .save()
        .then(ticketDB => {
          res.json("Schedule updated");
        })
        .catch(err => {
          res.status(400).send("Schedule update not possible");
        });
    }
  });
});

//endpoints for Ticket Reserve schema*********************

ticketsRoutes.route("/reserve").get(function(req, res) {
  TicketReserve.find(function(err, ticketDB) {
    if (err) {
      console.log(err);
    } else {
      res.json(ticketDB);
    }
  });
});

ticketsRoutes.route("/reserve/:id").get(function(req, res) {
  let id = req.params.id;
  TicketReserve.findById(id, function(err, ticketDB) {
    res.json(ticketDB);
  });
});

ticketsRoutes.route("/reserve/add").post(function(req, res) {
  let rticketDB = new TicketReserve(req.body);
  rticketDB
    .save()
    .then(rticketDB => {
      res
        .status(200)
        .json({ rticketDB: "Data added to Reserve schema successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new data to reserve failed");
    });
});

ticketsRoutes.route("/reserve/update/:id").post(function(req, res) {
  TicketReserve.findById(req.params.id, function(err, ticketDB) {
    if (!ticketDB) {
      res.status(404).send("Reserve data is not found");
    } else {
      ticketDB.train_code = req.body.train_code;
      ticketDB.train_route = req.body.train_route;
      ticketDB.departure_time = req.body.departure_time;
      ticketDB.arrival_time = req.body.arrival_time;
      ticketDB.ticket_price = req.body.ticket_price;
      ticketDB.date = req.body.date;
      ticketDB.numberOf_person = req.body.numberOf_person;
      ticketDB.payment_method = req.body.payment_method;

      ticketDB
        .save()
        .then(ticketDB => {
          res.json("reserve updated");
        })
        .catch(err => {
          res.status(400).send("Reserve update not possible");
        });
    }
  });
});

//endpoints for SampathPay schema*********************
ticketsRoutes.route("/paySampath").get(function(req, res) {
  PaySampath.find(function(err, ticketDB) {
    if (err) {
      console.log(err);
    } else {
      res.json(ticketDB);
    }
  });
});

ticketsRoutes.route("/paySampath/:id").get(function(req, res) {
  let id = req.params.id;
  PaySampath.findById(id, function(err, ticketDB) {
    res.json(ticketDB);
  });
});

ticketsRoutes.route("/paySampath/add").post(function(req, res) {
  let rticketDB = new PaySampath(req.body);
  rticketDB
    .save()
    .then(rticketDB => {
      res
        .status(200)
        .json({ rticketDB: "Data added to Sampath pay schema successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new data to Sampath pay failed");
    });
});

//endpoints for DialogPay schema*********************
ticketsRoutes.route("/payDialog").get(function(req, res) {
  PayDialog.find(function(err, ticketDB) {
    if (err) {
      console.log(err);
    } else {
      res.json(ticketDB);
    }
  });
});

ticketsRoutes.route("/payDialog/:id").get(function(req, res) {
  let id = req.params.id;
  PayDialog.findById(id, function(err, ticketDB) {
    res.json(ticketDB);
  });
});

ticketsRoutes.route("/payDialog/add").post(function(req, res) {
  let rticketDB = new PayDialog(req.body);
  rticketDB
    .save()
    .then(rticketDB => {
      res
        .status(200)
        .json({ rticketDB: "Data added to Dialog pay schema successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new data to Dialog pay failed");
    });
});

//**************************************************
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

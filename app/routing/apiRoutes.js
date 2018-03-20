// JavaScript Document

var express = require("express");

var serverSide = express();

serverSide.get("../data/friends.js", function(req, res) {
	res.send("Connected to Friends Page.");
});

serverSide.post("../data/friends.js", function(req, res) {
	res.send("Posted Stuff");
	console.log("Did it work?");
});
// JavaScript Document

var express = require("express");

var serverSide = express();

serverSide.get("../public/survey.html", function(req, res) {
	res.send("Connected to Survey Page.");
});

serverSide.get("/", function(req, res) {
	res.sendfile("default.html", { root: __dirname + "../public/survey.html"})
});
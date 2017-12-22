const mongoose = require("mongoose");
const passport = require("passport");
const { User } = require("../models");

module.exports.getUser = function(req, res){
	console.log('made it to profile.getUser');
	console.log(req.user);
	if(req.user){
		res.send(req.user)	
	} else {
		res.send({ success: false })
	}
}
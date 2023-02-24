// require("dotenv").config();
import { config } from "dotenv";
config();
// import { config } from "dotenv";
// config();
// const userLib = require("./backend/lib/userLib");
// const todoLib = require("./backend/lib/todoLib");
import * as todoLib from "./backend/lib/todoLib.js";
// const mongoose = require("mongoose");
import mongoose from "mongoose";
// const express = require('express');
import express,{request} from "express";
// const { request } = require("express");
const app = express();
const port = process.env.PORT || 5010;
const options = {
	extensions:['htm','html','css','js','ico','jpg','jpeg','png','svg','pdf'],
	index:['index.html'],
}

app.use(express.static("frontend"));
app.use(express.json());
app.get("/*", (request, response) => {
    response.sendFile(process.cwd() + "/frontend/index.html");
});
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function (err){
	if(err){
		console.error(err);
	}
	else{
		console.log("DB Connected");



		// todoLib.createTodo({title: "nithin vp"}, function(err,res){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(res);
		// 	}
		// });
		// todoLib.getAllTodos(function(err,res){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(res);
		// 	}
		// });
		// todoLib.getSingleTodoById({title: "nithin vp"}, function(err,res){
		// 	if(err) console.error(err);
		// 	else console.log(res);
		// });

		// todoLib.getTodosByQuery({isCompleted: false, isDeleted: false}, function(err,res){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(res);
		// 	}
		// });
		// todoLib.updateTodoById()

		// TODO: donot create user if atleast 1 user exist int the table
		// userLib.createFirstUser(function(err,res){
		// 	if(err){
		// 		// console.error(err);
		// 	}
		// 	else{
		// 		console.log(res);
		// 	}
		// });
		// userLib.createUser({userName: "beingzero", yearOfGraduation: 2025},function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.updateUser(function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.deleteUser("Srikanth Reddy",function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.getUserByFilter({userName: "Srikanth Reddy"}, function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.getAllUsers(function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });

		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
		
	}
});
/***********
 ***USERS***
 ***********/
const express = require("express");
const router = express.Router();
const users_model = require("./users-model");

router.get("/users", async (req, res, next) => {
  try {
    const users = await users_model.getUsers();

    res.status(200).json({
      users,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/users/:id", async (req, res, next) => {
  try {
    const user = await users_model.getUser(req.params.id);
  } catch (error) {
    next(error);
  }
});


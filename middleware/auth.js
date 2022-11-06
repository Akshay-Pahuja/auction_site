//#region Import libraries
const jwt = require("jsonwebtoken");
const db = require("../models");
const logHelper = require("../helpers/mongo.log4j.helper");
const User = db.users;
const logger = 'middleware.auth'
//#endregion
//#region verify auth token
exports.verifyToken = async function (req, res, next) {
  try {
    if (!req.headers["ispublic"] || req.headers["ispublic"] === 'false') {
      if (!req.headers["authorization"]) {
        return res.status(401).send({
          message: "Auth Header is missing.!",
        });
      }
      let token =
        req.headers["authorization"].split(" ")[1] || req.headers["authorization"];
      if (!token) {
        return res.status(403).send({
          message: "No token provided!",
        });
      }
      jwt.verify(token, global.config.jwtSecret, (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: "Unauthorized!",
          });
        }
        else {
          req.currentUser = decoded.data
        }
        next();
      })
    }
    else {
      next();
    }
  } catch (ex) {
    logHelper.createErrorLog(logger, 'Error : ' + ex.message || 'Some error occurred while verifying token.');
    res.status(500).send({
      message: ex.message || "Some error occurred while verifying token."
    });
  }
};
//#endregion

//#region verify current user
exports.verifyUser = async function (req, res, next) {
  try {
    if (!req.headers["ispublic"] || req.headers["ispublic"] === 'false') {
      const user = await verifyUserExist(req.currentUser)
      if (user.error) {
        return res.status(404).send({
          message: user.error
        });
      }
      else next();
    }
    else {
      next();
    }
  } catch (ex) {
    logHelper.createErrorLog(logger, 'Error : ' + ex.message || 'Some error occurred while verifying user.');
    res.status(500).send({
      message: ex.message || "Some error occurred while verifying user."
    });
  }
}
//#endregion

//#region verify current admin user
exports.verifyAdminUser = async function (req, res, next) {
  try {
    if (!req.headers["ispublic"] || req.headers["ispublic"] === 'false') {
      const user = await verifyUserExist(req.currentUser)
      if (user.error) {
        return res.status(404).send({
          message: user.error
        });
      }
      else if (!user.role || user.role !== 'Admin') {
        return res.status(401).send({
          message: `User is not an admin. Unauthorized Access!`
        });
      }
      else
        next()
    }
    else {
      next();
    }
  } catch (ex) {
    logHelper.createErrorLog(logger, 'Error : ' + ex.message || 'Some error occurred while verifying user.');
    res.status(500).send({
      message: ex.message || "Some error occurred while verifying user."
    });
  }
}
//#endregion

//#region verify correct api key from listener app
exports.verifyApiKey = async function (req, res, next) {
  try {
    if (!req.headers["x-api-key"] || req.headers["x-api-key"] != process.env.LISTENER_APP_API_KEY) {
      return res.status(401).send({
        message: `Unauthorized Access!`
      });
    }
    else {
      next();
    }
  } catch (ex) {
    logHelper.createErrorLog(logger, 'Error : ' + ex.message || 'Some error occurred while verifying Api Key.');
    res.status(500).send({
      message: ex.message || "Some error occurred while verifying Api Key."
    });
  }
}
//#endregion

//#region verify current user exits

const verifyUserExist = async (data) => {
  const userCondition = {
    "email": { $eq: data.email }
  };
  const user = await User.findOne(userCondition)
  if (!user) {
    return {
      error: `User not exist with email ${user.email}`
    };
  }
  else if (!user.isApproved) {
    return {
      error: `User is not approved with email ${user.email}`
    };
  }
  return user;
}

//#endregion

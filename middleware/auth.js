const jwt = require("jsonwebtoken");

exports.verifyToken = async function (req, res, next) {
  try {
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
    jwt.verify(token, '123456', (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!",
        });
      }
      else {
        req.currentAccount = decoded.data
      }
      next();
    })
  } catch (ex) {
    res.status(500).send({
      message: ex.message || "Some error occurred while verifying token."
    });
  }
};

exports.verifyUser = async function (req, res, next) {
  try {
    if (req.currentAccount.user && req.currentAccount.user.id) {
      next()
    }
    else {
      return res.status(401).send({
        message: "Unauthorised"
      });
    }
  }
  catch (ex) {
    res.status(500).send({
      message: ex.message || "Some error occurred while verifying user."
    });
  }
}

exports.verifyUserOrSupploer = async function (req, res, next) {
  try {
    if ((req.currentAccount.user && req.currentAccount.user.id) || (req.currentAccount.supplier && req.currentAccount.supplier.id)) {
      next()
    }
    else {
      return res.status(401).send({
        message: "Unauthorised"
      });
    }
  }
  catch (ex) {
    res.status(500).send({
      message: ex.message || "Some error occurred while verifying user."
    });
  }
}

exports.verifySupplier = async function (req, res, next) {
  try {
    if (req.currentAccount.supplier && req.currentAccount.supplier.id) {
      next()
    }
    else {
      return res.status(401).send({
        message: "Unauthorised"
      });
    }
  }
  catch (ex) {
    res.status(500).send({
      message: ex.message || "Some error occurred while verifying user."
    });
  }
}

exports.verifySupplierOrAdmin = async function (req, res, next) {
  try {
    if ((req.currentAccount.supplier && req.currentAccount.supplier.id) || (req.currentAccount.admin && req.currentAccount.admin.id)) {
      next()
    }
    else {
      return res.status(401).send({
        message: "Unauthorised"
      });
    }
  }
  catch (ex) {
    res.status(500).send({
      message: ex.message || "Some error occurred while verifying user."
    });
  }
}

exports.verifyAdmin = async function (req, res, next) {
  try {
    if (req.currentAccount.admin && req.currentAccount.admin.id) {
      next()
    }
    else {
      return res.status(401).send({
        message: "Unauthorised"
      });
    }
  }
  catch (ex) {
    res.status(500).send({
      message: ex.message || "Some error occurred while verifying user."
    });
  }
}

exports.verifyAdminOrUser = async function (req, res, next) {
  try {
    if ((req.currentAccount.admin && req.currentAccount.admin.id) || (req.currentAccount.user && req.currentAccount.user.id)) {
      next()
    }
    else {
      return res.status(401).send({
        message: "Unauthorised"
      });
    }
  }
  catch (ex) {
    res.status(500).send({
      message: ex.message || "Some error occurred while verifying user."
    });
  }
}
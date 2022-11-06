let router = require("express").Router();
const transactions = require("../controllers/transactions");
const { verifyToken, verifyAdmin, verifyAdminOrUser, verifyUser } = require("../middleware/auth");

router.get("/", [verifyToken, verifyAdmin], transactions.index);
router.post("/", [verifyToken, verifyUser], transactions.create);
router.get("/:id", [verifyToken, verifyAdminOrUser], transactions.show);

module.exports = router

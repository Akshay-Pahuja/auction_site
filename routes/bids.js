let router = require("express").Router();
const bids = require("../controllers/bids");
const { verifyToken, verifySupplier, verifyUser } = require("../middleware/auth");

router.get("/", [verifyToken, verifySupplier], bids.index);
router.post("/", [verifyToken, verifyUser], bids.create);
router.get("/:id", [verifyToken, verifySupplier], bids.show);

module.exports = router
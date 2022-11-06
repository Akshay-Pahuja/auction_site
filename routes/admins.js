let router = require("express").Router();
const admins = require("../controllers/admins");
const { verifyToken, verifyAdmin } = require("../middleware/auth");

router.get("/", [verifyToken, verifyAdmin], admins.index);
router.post("/", [verifyToken, verifyAdmin], admins.create);
router.put("/:id", [verifyToken, verifyAdmin], admins.update);
router.get("/:id", [verifyToken, verifyAdmin], admins.show);
router.delete("/:id", [verifyToken, verifyAdmin], admins.delete);

module.exports = router

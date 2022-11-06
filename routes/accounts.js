let router = require("express").Router();
const accounts = require("../controllers/accounts");
const { verifyToken, verifyAdmin } = require("../middleware/auth");

router.post("/login", accounts.login);
router.put("/:id", [verifyToken, verifyAdmin], accounts.update);
router.get("/:id", [verifyToken, verifyAdmin], accounts.show);
router.delete("/:id", [verifyToken, verifyAdmin], accounts.delete);

module.exports = router

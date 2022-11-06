let router = require("express").Router();
const users = require("../controllers/users");
const { verifyToken, verifyAdmin, verifyAdminOrUser } = require("../middleware/auth");

router.get("/", [verifyToken, verifyAdmin], users.index);
router.post("/", users.create);
router.put("/:id", [verifyToken, verifyAdminOrUser], users.update);
router.get("/:id", [verifyToken, verifyAdminOrUser], users.show);
router.delete("/:id", [verifyToken, verifyAdmin], users.delete);

module.exports = router
let router = require("express").Router();
const carts = require("../controllers/carts");
const { verifyToken, verifyUser } = require("../middleware/auth");

router.get("/", [verifyToken, verifyUser], carts.index);
router.post("/", [verifyToken, verifyUser], carts.create);
router.put("/:id", [verifyToken, verifyUser], carts.update);
router.get("/:id", [verifyToken, verifyUser], carts.show);
router.delete("/:id", [verifyToken, verifyUser], carts.delete);

module.exports = router

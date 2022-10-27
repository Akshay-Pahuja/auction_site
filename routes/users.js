let router = require("express").Router();
const users = require("../controllers/users")

router.get("/", users.index);
router.post("/", users.create);
router.put("/:id", users.update);
router.get("/:id", users.show);
router.delete("/:id", users.delete);

module.exports = router
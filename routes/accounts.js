let router = require("express").Router();
const accounts =  require("../controllers/accounts")

router.post("/login", accounts.login);
router.put("/:id", accounts.update);
router.get("/:id", accounts.show);
router.delete("/:id", accounts.delete);

module.exports = router

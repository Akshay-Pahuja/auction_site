let router = require("express").Router();
const transactions =  require("../controllers/transactions")

router.get("/",transactions.index);
router.post("/",transactions.create);
router.put("/:id", transactions.update);
router.get("/:id", transactions.show);
router.delete("/:id", transactions.delete);

module.exports = router

let router = require("express").Router();
const suppliers =  require("../controllers/suppliers")

router.get("/",suppliers.index);
router.post("/",suppliers.create);
router.put("/:id", suppliers.update);
router.get("/:id", suppliers.show);
router.delete("/:id", suppliers.delete);

module.exports = router

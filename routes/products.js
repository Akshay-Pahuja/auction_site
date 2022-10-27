let router = require("express").Router();
const products =  require("../controllers/products")

router.get("/",products.index);
router.post("/",products.create);
router.put("/:id", products.update);
router.get("/:id", products.show);
router.delete("/:id", products.delete);

module.exports = router

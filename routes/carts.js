let router = require("express").Router();
const carts =  require("../controllers/carts")

router.get("/",carts.index);
router.post("/",carts.create);
router.put("/:id", carts.update);
router.get("/:id", carts.show);
router.delete("/:id", carts.delete);

module.exports = router

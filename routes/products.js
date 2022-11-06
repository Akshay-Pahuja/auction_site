let router = require("express").Router();
const products = require("../controllers/products");
const { verifyToken, verifySupplierOrAdmin } = require("../middleware/auth");

router.get("/", [verifyToken], products.index);
router.post("/", [verifyToken, verifySupplierOrAdmin], products.create);
router.put("/:id", [verifyToken, verifySupplierOrAdmin], products.update);
router.get("/:id", [verifyToken], products.show);
router.delete("/:id", [verifyToken, verifySupplierOrAdmin], products.delete);

module.exports = router

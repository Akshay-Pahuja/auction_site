let router = require("express").Router();
const suppliers = require("../controllers/suppliers");
const { verifyToken, verifyAdmin, verifySupplierOrAdmin } = require("../middleware/auth");

router.get("/", [verifyToken, verifyAdmin], suppliers.index);
router.post("/", [verifyToken, verifyAdmin], suppliers.create);
router.put("/:id", [verifyToken, verifySupplierOrAdmin], suppliers.update);
router.get("/:id", [verifyToken, verifySupplierOrAdmin], suppliers.show);
router.delete("/:id", [verifyToken, verifyAdmin], suppliers.delete);

module.exports = router

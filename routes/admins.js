let router = require("express").Router();
const admins =  require("../controllers/admins")

router.get("/",admins.index);
router.post("/",admins.create);
router.put("/:id", admins.update);
router.get("/:id", admins.show);
router.delete("/:id", admins.delete);

module.exports = router

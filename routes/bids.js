let router = require("express").Router();
const bids =  require("../controllers/bids")

router.get("/",bids.index);
router.post("/",bids.create);
router.put("/:id", bids.update);
router.get("/:id", bids.show);
router.delete("/:id", bids.delete);

module.exports = router
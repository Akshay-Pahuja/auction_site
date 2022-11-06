let router = require("express").Router();

router.use('/users', require("./users"));
router.use('/admins', require("./admins"));
router.use('/bids', require("./bids"));
router.use('/carts', require("./carts"));
router.use('/products', require("./products"));
router.use('/suppliers', require("./suppliers"));
router.use('/transactions', require("./transactions"));
router.use('/accounts', require("./accounts"));


router.get("/health-check", (req, res) => {
    res.status(200).json({ message: "working fine" });
});

router.use((req, res) => {
    return res.status(404).json({ message: "Not Found" });
});

module.exports = router
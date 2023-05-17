const {createUser,getEpmloyers, getEpmloyersById, createJoblistings, getjoblistings} = require("./userController");
const router = require("express").Router()

router.post("/joblistings",createJoblistings);
router.post("/employers", createUser);
router.get("/employers",getEpmloyers);
router.get('employers/:id',getEpmloyersById);
router.get("/joblistings",getjoblistings);

module.exports = router;
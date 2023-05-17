const {createUser,getEpmloyers, getEpmloyersById, createJoblistings, getjoblistings, getJobListingsById, getJobListingsByEmployer} = require("./Controller");
const router = require("express").Router()

router.post("/joblistings",createJoblistings);
router.post("/employers", createUser);
router.get("/employers",getEpmloyers);
router.get('/employers/:id',getEpmloyersById);
router.get("/joblistings",getjoblistings);
router.get('/joblistings/:id',getJobListingsById);
router.get('/joblistings/Employer/:Employer',getJobListingsByEmployer);
module.exports = router;
const router = require("express").Router();

const auth = require("../middleware/authMiddleware");

const {
  getLeads,
  createLead,
  updateLead,
  deleteLead,
} = require("../controllers/leadController");

router.get("/", auth, getLeads);

router.post("/", createLead);

router.put("/:id", auth, updateLead);

router.delete("/:id", auth, deleteLead);

module.exports = router;
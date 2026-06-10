const Lead = require("../models/Lead");

exports.getLeads = async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
};

exports.createLead = async (req, res) => {
  const lead = await Lead.create(req.body);
  res.json(lead);
};

exports.updateLead = async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(lead);
};

exports.deleteLead = async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
};
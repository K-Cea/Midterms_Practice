const Record = require('../models/Record');

const updateRecord = async (req, res, next) => {
  try {
    const updatedRecord = await Record.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, description: req.body.description },
      { new: true }
    );
    if (!updatedRecord) return res.status(404).json({ error: 'Record not found' });
    res.json({ message: 'Record updated successfully', record: updatedRecord });
  } catch (err) {
    next(err);
  }
};

const deleteRecord = async (req, res, next) => {
  try {
    const deletedRecord = await Record.findByIdAndDelete(req.params.id);
    if (!deletedRecord) return res.status(404).json({ error: 'Record not found' });
    res.json({ message: 'Record deleted successfully', record: deletedRecord });
  } catch (err) {
    next(err);
  }
};

module.exports = { updateRecord, deleteRecord };
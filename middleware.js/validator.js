const validateRecordInput = (req, res, next) => {
  const { title } = req.body;
  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Validation Error: Title is required and must be a string.' });
  }
  next();
};

module.exports = { validateRecordInput };
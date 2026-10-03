const authenticateAdmin = (req, res, next) => {
  const userRole = req.headers['x-user-role']; // Mock verification header
  if (!userRole) return res.status(401).json({ error: 'Unauthorized: No role provided' });
  if (userRole !== 'admin') return res.status(403).json({ error: 'Forbidden: Admin access required' });
  next();
};

module.exports = { authenticateAdmin };
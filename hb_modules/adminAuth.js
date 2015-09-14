function isAdmin(req, res, next) {
  if (req.user.local && req.user.local.email)
    return next();

  res.redirect('/');
}
exports.isAdmin = isAdmin;
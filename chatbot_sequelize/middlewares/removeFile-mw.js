const removeFile = (req, res, next) => {
  req.files = '';
  next();
};

module.exports = removeFile;

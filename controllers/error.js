exports.get404 = (req, res, next) => {
  res.status(404).send("file is not found");
};

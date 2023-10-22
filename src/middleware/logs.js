const logRequest = (req, res, next) => {
  console.log("terjadi request ke path berikut", req.path);
  next();
};

module.exports = logRequest;

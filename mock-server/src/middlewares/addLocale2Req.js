const en = require("../localization/en");
const fa = require("../localization/fa");

module.exports = function (req, res, next) {
  var lang = req.headers.localization;
  req.locale = lang === "fa" ? fa : en;
  req.lang = lang;
  next();
};

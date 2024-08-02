import en from '../localization/en.js';
import fa from '../localization/fa.js';

export default function (req, res, next) {
  const lang = req.headers.localization;
  req.locale = lang === 'fa' ? fa : en;
  req.lang = lang;
  next();
}

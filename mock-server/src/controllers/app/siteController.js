
exports.GetSite = function (req, res) {
  try {
    return res.status(200).json({ message: 'Simple Get' });
  } catch (error) {
    return res.status(500).json({ message: 'Simple Error', error: error });
  }
};

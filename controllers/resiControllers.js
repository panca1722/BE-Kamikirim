const { resiServices } = require ('../services')
async function getResi(req, res) {
  const resi = await resiServices.getAllResi();
  res.status(200).json(resi);
}

module.exports = {
  getResi,
};

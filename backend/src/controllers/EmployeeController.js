const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index(req, res) {
    const employee = await connection('employee').select('*');

    return res.json(employee);
  },

  async create(req, res) {
    const { name, wage, bonus } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('employee').insert({
      id,
      name,
      wage,
      bonus,
    });

    return res.json({ id, name, wage, bonus });
  }
}
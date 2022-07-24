const db = require('../models');

class UserController {
  static findAll = async (req, res) => {
    try {
      const users = await db.Users.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static create = async (req, res) => {
    const dados = req.body;
    try {
      const user = await db.Users.create(dados);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static findById = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await db.Users.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static update = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    try {
      await db.Users.update(dados, {
        where: {
          id: Number(id),
        },
      });
      const user = await db.Users.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static delete = async (req, res) => {
    const { id } = req.params;
    try {
      await db.Users.destroy({
        where: {
          id: Number(id),
        },
      });
      return res
        .status(200)
        .json({ mensagem: `Usuário #${id} foi deletado com sucesso!` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
}

module.exports = UserController;

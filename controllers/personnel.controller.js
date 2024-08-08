const { Personnel } = require("../models/Personnel");

const encrypt = require("../helpers/encryptpass");

module.exports.Personnel = {
  getAll: async (req, res) => {
    const personnel = await Personnel.find();
    res.status(200).send({
      error: false,
      message: "All personnel",
      data: personnel,
    });
  },

  getOne: async (req, res) => {
    const personnel = await Personnel.findById(req.params.id);
    res.status(200).send({
      error: false,
      message: "Personnel found",
      data: personnel,
    });
  },

  create: async (req, res) => {
    req.body.isAdmin = false;
    if (!req.user.isAdmin) {
      req.body.isLead = false;
      console.log("Team lead created user");
    } else {
      console.log("You are not authorized to create a personnel");
    }
    const personnel = await Personnel.create(req.body);
    res.status(201).send({
      error: false,
      message: "Personnel created",
      data: personnel,
    });
  },

  update: async (req, res) => {
    const personnel = await Personnel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).send({
      error: false,
      message: "Personnel updated",
      data: personnel,
    });
  },
  delete: async (req, res) => {
    const personnel = await Personnel.findByIdAndDelete(req.params.id);
    res.status(200).send({
      error: false,
      message: "Personnel deleted",
      data: personnel,
    });
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const personnel = await Personnel.findOne({
      username,
      password: encrypt(password),
    });

    if (personnel) {
      req.session = {
        id: personnel._id,
        password: personnel.password,
      };
      if (req.body?.rememberMe) {
        const days = 3;
        req.session.cookie.expires = new Date(
          Date.now() + days * 24 * 60 * 60 * 1000
        );
        // the session will expire after 3 days
      }
      res.status(200).send({
        error: false,
        message: "Login successful",
        data: personnel,
      });
    } else {
      res.status(401).send({
        error: true,
        message: "Invalid credentials",
      });
    }
  },

  logout: async (req, res) => {
    req.session.destroy();
    res.status(200).send({
      error: false,
      message: "Logout successful",
    });
  },
};

const Adress = require("../models/AddressAttributes");
const Request = require("../models/Request");
const User_Info = require("../models/User_Info");

module.exports = {
  async create(req, res) {
    const {
      phone,
      name,
      email,
      city,
      neighborhood,
      street,
      uf,
      zip_code,
    } = req.body;

    const user_info = await User_Info.create({
      phone,
      name,
      email,
    });

    const adress = await Adress.create({
      city,
      neighborhood,
      street,
      uf,
      zip_code,
    });

    const user = user_info.dataValues.id;
    const adress_info = adress.dataValues.id;
    await Request.create({
      user,
      adress_info,
    });

    const request = await Request.findAll({
      include: [
        { association: "user_info" },
        { association: "address_atributes" },
      ],
    });

    return res.json(request);
  },
};

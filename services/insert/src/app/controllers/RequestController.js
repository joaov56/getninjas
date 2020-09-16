const Adress = require("../models/Adress_Info");
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
    return res.json(user_info);

    // const adress_info = Adress.create({
    //   city,
    //   neighborhood,
    //   street,
    //   uf,
    //   zip_code,
    // });

    // return adress_info;
  },
};

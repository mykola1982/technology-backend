const { Order } = require("../../models");

const addOrder = async (req, res, next) => {
  const newOrder = await Order.create({ ...req.body });

  res.status(201).json({
    status: "success",
    code: 201,
    data: { order: newOrder },
    message: "Create succesfull",
  });
};

module.exports = addOrder;

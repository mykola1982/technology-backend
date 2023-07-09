const { Order } = require("../../models");

const getAllOrders = async (req, res, next) => {
  const orders = await Order.find();

  res.status(200).json({
    status: "success",
    code: 200,
    data: { orders },
    total: orders.length,
  });
};

module.exports = getAllOrders;

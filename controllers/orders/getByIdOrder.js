const { Order } = require("../../models");

const { HttpError } = require("../../helpers");

const getByIdOrder = async (req, res, next) => {
  const { id } = req.params;
  const orders = await Order.findById(id);

  if (!orders) {
    throw HttpError(404, `Order with id:${id} was not found `);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    data: orders,
  });
};

module.exports = getByIdOrder;

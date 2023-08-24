const { HttpError } = require("../../helpers");
const { Order } = require("../../models");

const updateToRemoveOrder = async (req, res) => {
  const { id } = req.params;

  const order = await Order.findById(id);
  if (!order) {
    throw HttpError(404, "Not found");
  }

  const { toRemove } = order;

  order.toRemove = !toRemove;
  await order.save();

  console.log(order.toRemove);
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      id,
      toRemove,
    },
    massege: "Success update order",
  });
};

module.exports = updateToRemoveOrder;

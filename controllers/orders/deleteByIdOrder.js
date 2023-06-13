const { HttpError } = require("../../helpers");
const { Order } = require("../../models");

const deleteByIdOrder = async (req, res, next) => {
  const { id } = req.params;

  const result = await Order.findByIdAndRemove(id);

  if (!result) {
    throw HttpError(404, `Order with id:${id} was not found `);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    id,
    massage: `Success remove order with id:${id}`,
  });
};

module.exports = deleteByIdOrder;

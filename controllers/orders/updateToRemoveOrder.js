const { HttpError } = require("../../helpers");
const { Order } = require("../../models");

const updateToRemoveOrder = async (req, res) => {
  const { id } = req.params;
  const result = await Order.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({
    status: "success",
    code: 200,
    id,
    massege: "Success update order",
  });
};

module.exports = updateToRemoveOrder;

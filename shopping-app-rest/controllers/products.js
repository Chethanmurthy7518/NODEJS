const product = require("../models/products");
const getAllProducts = async (req, res, next) => {
  try {
    const products = await product.find().lean();
    res.json({
      error: false,
      message: "",
      data: products,
    });
  } catch (err) {
    next(err);
  }
};

const addproduct = async (req, res, next) => {
  const { pName, pDesc, pPrice } = req.body;
  try {
    await product.insertMany([
      {
        pName,
        pDesc,
        pPrice,
      },
    ]);
    res.json({
      error: false,
      message: "product added successfully",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

const editProduct = async (req, res, next) => {
  const { _id, pName, pDesc, pPrice } = req.body;
  try {
    await product.updateOne(
      {
        _id: _id,
      },
      {
        $set: {
          pName,
          pDesc,
          pPrice,
        },
      }
    );
    res.json({
      error: false,
      message: "product updated successfully",
      data: {
        _id,
        pName,
        pDesc,
        pPrice,
      },
    });
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  const { _id } = req.body;
  try {
    await product.deleteOne({
      _id: _id,
    });
    res.json({
      error: false,
      message: "product deleted successfully",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
  addproduct,
  editProduct,
  deleteProduct,
};

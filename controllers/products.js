const model = require("../models/product");
const getAllProduct = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = { $regex: company, $options: "i" };
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (featured) {
    queryObject.featured = featured;
  }
  let ApiData = model.find(queryObject);
  if (sort) {
    let sortFIx = sort.replaceAll(",", " ");
    ApiData = ApiData.sort(sortFIx);
  }
  if (select) {
    let selectFix = select.replaceAll(",", " ");
    ApiData = ApiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  let skip = (page - 1) * limit;
  ApiData = ApiData.skip(skip).limit(limit);

  const myData = await ApiData;
  res.status(200).json({ myData, nb: myData.length });
};
const getAllProductTesting = async (req, res) => {
  const myData = await model.find(req.query).select("name company");
  console.log(req.query);
  res.status(200).json({ myData });
};

module.exports = { getAllProduct, getAllProductTesting };

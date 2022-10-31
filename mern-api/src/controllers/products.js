exports.createProducts = (req, res, next) => {
  res.json({
    message: "Create Products Success!",
    data: {
      id: 1,
      name: "Faiq",
      email: "faiq1@gmail.com",
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: "Get All Products Success",
    data: {
      id: 1,
      name: "Faiq",
      email: "faiq1@gmail.com",
    },
  });
  next();
};

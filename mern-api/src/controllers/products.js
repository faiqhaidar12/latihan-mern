exports.createProducts = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  res.json({
    message: "Create Products Success!",
    data: {
      id: 1,
      name: name,
      email: email,
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

exports.getLoginPage = function (req, res) {
  try {
    res.status(200).render("login");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getSignupPage = function (req, res) {
  try {
    res.status(200).render("signup");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

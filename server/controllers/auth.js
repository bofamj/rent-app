const register = (req, res) => {
  try {
    res.status(200).send("you arr registered");
  } catch (error) {
    res.status(400).json(error);
  }
};
const login = (req, res) => {
  try {
    res.status(200).send("you login");
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  register,
  login,
};

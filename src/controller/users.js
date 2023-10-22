const getAllUsers = (req, res) => {
  const data = {
    id: "1",
    name: "giyas",
    email: "giyas231@gmail.com",
    addres: "jakarta timur",
  };
  res.json({
    message: "data berhasil diambil",
    data: data,
  });
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "sudah berhasil membuat user",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  console.log("idUser", idUser);
  res.json({
    message: "UPDATE user success",
    data: req.body,
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
};

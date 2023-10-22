const express = require("express");

const UserController = require("../controller/users");

const router = express.Router();
// create-post
router.get("/", UserController.getAllUsers);
// read-get
router.post("/", UserController.createNewUser);
// update-patch
router.patch("/:idUser", UserController.updateUser);

// router.post("/", (req, res) => {
//   res.json({
//     massage: "Post user succes",
//   });
// });

module.exports = router;

const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require("../../controllers/userController");

// /api/users
router.route("/")
.get(getUsers)
.post(createUser);

// /api/users/:userId
router
// userId is defined in userController
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId")
  .post(addFriend)
  .delete(removeFriend)

module.exports = router;

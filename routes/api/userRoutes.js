const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  removeThought,
} = require("../../controllers/userController");

// /api/users
router.route("/")
.get(getUsers)
.post(createUser);

// /api/users/:userId
router
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/thought/:thoughtId
router.route("/:userId/thought/:thoughtId").delete(removeThought);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId")
  .post(addNewFriend)
  .delete(deleteFriend)

module.exports = router;

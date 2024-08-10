const express = require("express");

const router = express.Router();

const {
  createUser,
  getUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
} = require("../Controllers/user-controller");

router.route("/").post(createUser).get(getUsers);
router
  .route("/:id")
  .get(getUserByID)
  .patch(updateUserByID)
  .delete(deleteUserByID);

// router.post("/", createUser);
// router.get('/',getUsers )
// router.get('/:id', getUserByID)
// router.patch('/:id', updateUserByID)
// router.delete('/:id', deleteUserByID)

module.exports = router;

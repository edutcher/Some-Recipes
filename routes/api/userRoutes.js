const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    let newUser = new User(req.body);

    newUser.save();

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.user_name = newUser.name;
      req.session.logged_in = true;
      req.session.message = undefined;

      res.status(200).json({ logged_in: true });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    let { name, password } = req.body;
    let user = await User.findOne({ name });

    if (!user) {
      req.session.message = "Incorrect info";
      res.status(400).json({ logged_in: false, message: "Incorrect info" });
      return;
    }

    let goodPass = await User.checkPassword(user.name, password);

    if (!goodPass) {
      req.session.message = "Incorrect info";
      res.status(400).json({ logged_in: false, message: "Incorrect info" });

      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.user_name = user.name;
      req.session.logged_in = true;
      req.session.message = undefined;

      res.status(200).json({ logged_in: true });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

const User = require("../models/user");
const { setUser } = require("../service/auth");
const { v4: uuidv4 } = require("uuid");

// Signup handler
async function handleUserSignup(req, res) {
  try {
    const { name, email, password } = req.body;

    await User.create({ name, email, password });

    // ✅ Redirect to correct login page
    return res.redirect("/user/login");
  } catch (err) {
    console.error("❌ Error during signup:", err);
    return res.render("signup", { error: "Something went wrong, try again." });
  }
}

// Login handler
async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.render("login", { error: "Invalid email or password" });
  }


  const token=setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
}


async function handleUserLogout(req, res) {
  res.clearCookie("uid");         
  return res.redirect("/user/login");
}


module.exports = {
  handleUserSignup,
  handleUserLogin,
  handleUserLogout,
};

import connectDatabase from "./dbConnection/db.js";
import User from "./models/User.js";
import bcrypt from "bcrypt";

const userRegister = async () => {
  await connectDatabase();

  try {
    const hashPassword = await bcrypt.hash("admin", 10);

    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com", // ✅ fixed
      password: hashPassword,
      role: "admin",
    });

    await newUser.save();
    console.log("Admin user created successfully");
  } catch (error) {
    console.log(error);
  }
};

export default userRegister;


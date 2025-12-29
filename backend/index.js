import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import departmentRouter from "./routes/department.js";
import employeeRouter from "./routes/employee.js";
import connectDatabase from "./dbConnection/db.js";
import salaryRouter from "./routes/salary.js";
import LeaveRouter from "./routes/leave.js";
import changePasswordRoute from "./routes/ChangePassword.js";

import dashboardRouter from "./routes/dashboard.js";

import attendanceRouter from "./routes/attendance.js";

LeaveRouter;

//Step4:Add Routes
connectDatabase();

const app = express();
app.use(express.static("public/uploads"));

//https://fresh-mern-employee-front-end.vercel.app

app.use(
  cors({
<<<<<<< HEAD
    origin: "http://localhost:5174",
=======
    origin: "http://process.env.Public_Ip:5173",
>>>>>>> 156b2b595a47887090fb12a8d1777d996c53f0e4
    credentials: true,
  })
);
app.use(express.json()); //to convert nodejs  file to json file

//first
app.use("/api/auth", authRouter);
//second
app.use("/api/department", departmentRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/salary", salaryRouter);
app.use("/api/leave", LeaveRouter);

app.use("/api/dashboard", changePasswordRoute);

app.use("/api/dashboard", dashboardRouter);

app.use("/api/attendance", attendanceRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on Port ${process.env.PORT}`);
});

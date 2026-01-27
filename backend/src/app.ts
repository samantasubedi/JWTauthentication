import express from "express";
import router from "./routes/login/authentication"
const app = express();
app.get("/", (req, res) => {
  res.send("this is homepage");
});
app.use("/login",router)
app.listen(5000, () => {
  console.log("server running in port 5000");
});
export default app;

import express from "express";
import router from "./routes/login/authentication";
import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("this is homepage");
});

const dbconfig = {
  host: process.env.DB_HOST,
  port: Number(process.env.PORT),
  user: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};
console.log("USER:", process.env.HOST);
export const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(dbconfig),
});
console.log(dbconfig);
app.use("/", router);
app.listen(5000, () => {
  console.log("server running in port 5000");
});
export default app;

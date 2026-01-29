import express from "express";
import router from "./routes/index";
import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const app = express();

const dbconfig = {
  host: process.env.DB_HOST,
  port: Number(process.env.PORT),
  user: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

export const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(dbconfig),
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("this is homepage");
});
app.use("/", router);
app.listen(5000, () => {
  console.log("server running in port 5000");
});
export default app;

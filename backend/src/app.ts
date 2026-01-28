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

export const prisma = new PrismaClient({
  adapter: new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "jwt",
  }),
});

app.use("/login", router);
app.listen(5000, () => {
  console.log("server running in port 5000");
});
export default app;

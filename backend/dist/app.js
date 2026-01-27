import express, { Router } from 'express';

// src/app.ts
var router = Router();
router.get("/", (req, res) => {
  res.send("this is login page");
});
var authentication_default = router;

// src/app.ts
var app = express();
app.get("/", (req, res) => {
  res.send("this is homepage");
});
app.use("/login", authentication_default);
app.listen(5e3, () => {
  console.log("server running in port 5000");
});
var app_default = app;

export { app_default as default };
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map
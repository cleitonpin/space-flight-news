import "reflect-metadata";
import "dotenv/config"
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
// import swaggerUi from "swagger-ui-express";
import "../typeorm";
import "@shared/container";
import { router } from "./routes";
// import swaggerFile from "../../../swagger.json";
import { AppError } from "@shared/errors/appError";
import "@utils/cronjob";

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).send({ message: err.message });
  }

  return res.status(500).send({
    message: `Internal server error - ${err.message}`,
    status: "error"
  });
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
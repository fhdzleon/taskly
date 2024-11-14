import app from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

const PORT = 3000;

AppDataSource.initialize().then((res) => {
  console.log("BDD conected");

  app.listen(PORT, () => {
    console.log(`Server ready, listen in port ${PORT}`);
  });
});

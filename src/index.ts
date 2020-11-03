import * as dotenv from "dotenv";

import cors from "cors";
import express from "express";
import helmet from "helmet";

declare const module: WebpackHotModule;

dotenv.config();

const PORT: number = process.env.PORT
  ? parseInt(process.env.PORT as string, 10)
  : 3000;

const app = express();

app.use(helmet());
app.use(cors());

app.use((req, res, next) => {
  res.send("<h1>Hello World 😊😊😊</h1>");
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}

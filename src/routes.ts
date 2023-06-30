import { Router } from "express";

// importacao para documentacao teste
// import swaggerUi from "swagger-ui-express";
// const swaggerDocument = require("./swagger.json");

const routes = Router();

// rotas da documentacao teste
// routes.use("/api-docs", swaggerUi.serve);
// routes.get("/api-docs", swaggerUi.setup(swaggerDocument));

// aqui sao suas rotas de endpoint
// req - conteudo que vem da requisicao
// res - resposta que voce da para o client
routes.get("/get", function (req, res) {
  try {
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default routes;

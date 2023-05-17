const express = require('express');
const controllerProduto = require('./controllers/ProdutoController');

const routes = express.Router(); // Quando for requisitado o servidor passando as rotas, será chamado os métodos dentro da controller

routes.get('/List', controllerProduto.List); // Chama o List da Controller

routes.post('/Create', controllerProduto.Create);

routes.post('/Update', controllerProduto.Update);

routes.get('/GetByCodigo', controllerProduto.GetByCodigo);

routes.post('/Delete', controllerProduto.Delete);

module.exports = routes; // Jogando as rotas para dentro do module.exports para ser exportada
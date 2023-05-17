const { DateTime } = require('mssql');
const ModelProduto = require('../models/produto');

module.exports = 
{
    async List(req, res)
    {
        try {

            const produtos = await ModelProduto.findAll(); // Vai listar todos os produtos
            return res.json(produtos); // Retorno dos produtos

        } catch (error) {
            return console.error("Erro na lista: ", error);
        }
    },

    async Create(req, res) // A data deve estar no forma (YYYY/MM/DD) para funcionar!
    {
        try {

            const produtos = await ModelProduto.create( // Vai Criar os produtos
                {
                    Codigo: req.body.Codigo,
                    Descricao: req.body.Descricao,
                    DataCriacao: req.body.DataCriacao,
                    DataAtualizacao: req.body.DataAtualizacao
                }
            ); 
            return res.json(produtos); // Retorno dos produtos

        } catch (error) {
            return console.error("Erro na Criação: ", error);
        }
    },

    async Update(req, res)
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.Codigo); // Vai retornar a chave pelo código
            if (prod){ // Caso o Código seja diferente de nulo vai atualizar com os campos abaixo
                prod.Descricao = req.body.Descricao;
                prod.DataAtualizacao = new Date();
                await prod.save(); // Salva no BD
            }
            return res.json(prod); // Retorno dos produtos

        } catch (error) {
            return console.error("Erro na Atualização: ", error);
        }
    },

    async GetByCodigo(req, res)
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.Codigo); // Vai retornar a chave pelo código
           
            return res.json(prod); // Retorno dos produtos

        } catch (error) {
            return console.error("Erro ao Listar por Código: ", error);
        }
    },

    async Delete(req, res)
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.Codigo); // Vai retornar a chave pelo código
            await prod.destroy(); // Pego esse prod e apago
            return res.json(prod);

        } catch (error) {
            return console.error("Erro ao Deletar por Código: ", error);
        }
    },
}
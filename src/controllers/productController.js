const ProductModel = require('../models/productModel');
const MasterModel = require('../models/masterModel');

const ProductController = {
    async getAll(req, res) {
        try {
            const products = await ProductModel.getAll();
            res.success(products);
        } catch (err) {
            res.error({ error: err.message });
        }
    },

    async getById(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductModel.getById(id);
            res.success(product);
        } catch (err) {
            res.error({ error: err.message });
        }
    },

    async create(req, res) {
        try {
            const product = req.body;
            const newProduct = await ProductModel.create(product);
            res.status(201).json(newProduct);
        } catch (err) {
            res.error({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const product = req.body;
            const updatedProduct = await ProductModel.update(id, product);
            res.success(updatedProduct);
        } catch (err) {
            res.error({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            // await ProductModel.delete(id);
            res.status(204).send();
        } catch (err) {
            res.error({ error: err.message });
        }
    },
    
    async getMaster(req, res) {
        try {
            const master = await MasterModel.getAll();
            res.success(master);
        } catch (error) {
            res.error({ error: error.message });
        }
    }
};

module.exports = ProductController;

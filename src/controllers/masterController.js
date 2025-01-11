const MasterModel = require('../models/masterModel');

const MasterController = {
    async get(req, res) {
        try {
            const master = await MasterModel.getAll();
            res.success(master);
        } catch (error) {
            res.error({ error: error.message });
        }
    }
};

module.exports = MasterController;

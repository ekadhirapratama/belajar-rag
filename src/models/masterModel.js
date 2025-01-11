const supabase = require('../config/db-supabase');

const MasterModel = {
    async getAll() {
      const {
        data: categories, 
        error: categoriesError
      } = await supabase.from('product_categories').select('code, label');
      if (categoriesError) throw new Error(categoriesError.message);

      const {
        data: tags, 
        error: tagsError 
      } = await supabase.from('product_tags').select('code, label');
      if (tagsError) throw new Error(tagsError.message);

      return {
        categories,
        tags
      };
    },
};

module.exports = MasterModel;

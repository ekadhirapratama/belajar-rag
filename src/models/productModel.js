const supabase = require('../config/db-supabase');

const querySelect = [
  'id',
  'name',
  'username',
  'image',
  'description',
  'location',
  'price',
  'stock',
]

const ProductModel = {
    async getAll() {
        const { data, error } = await supabase
            .from('products')
            .select(`
              ${querySelect.join(', ')},
              product_tags(label, code),
              product_categories(label, code)
            `)
            .eq('is_available', true);
        if (error) throw new Error(error.message);
        return data;
    },

    async getById(id) {
        const { data, error } = await supabase
          .from('products')
          .select(`
            ${querySelect.join(', ')},
            product_tags(label, code),
            product_categories(label, code)
          `)
          .eq('id', id)
          .eq('is_available', true).single();
        if (error) throw new Error(error.message);
        return data;
    },

    async create(product) {
        const { data, error } = await supabase.from('products').insert([product]);
        if (error) throw new Error(error.message);
        return data;
    },

    async update(id, product) {
        const { data, error } = await supabase.from('products').update(product).eq('id', id);
        if (error) throw new Error(error.message);
        return data;
    },

    async delete(id) {
        const { data, error } = await supabase.from('products').delete().eq('id', id);
        if (error) throw new Error(error.message);
        return data;
    },
};

module.exports = ProductModel;

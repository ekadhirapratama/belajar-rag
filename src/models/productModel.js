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
    async getAll(filters = {}) {
      let query = supabase
        .from('products')
        .select(`
          ${querySelect.join(', ')},
          product_tags(label, code),
          product_categories(label, code)
        `)
        .eq('is_available', true);

      //  Tambahan Filter
      if (filters.name) {
        query = query.ilike('name', `%${filters.name}%`);
      }
      if (filters.location) {
        query = query.ilike('location', `%${filters.location}%`);
      }
      if (filters.username) {
        query = query.ilike('username', `%${filters.username}%`);
      }
      if (filters.product_category) {
        query = query.eq('product_category.code', filters.product_category);
      }
      if (filters.product_tag) {
        query = query.eq('product_tag.code', filters.product_tag);
      }

      // Pagination
      query = query.range(filters.start, filters.end);

      // Eksekusi Query
      const { data, error } = await query;
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

      if (!data) {
        throw new Error('Data not found');
      }
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

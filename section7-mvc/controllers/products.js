const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    res.render(
        'add-product.pug',
        {docTitle: 'Add Product', path: '/admin/add-product'}
    );
};

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render('shop', {prods: products, docTitle: 'Shop', path: '/'});
    });
};

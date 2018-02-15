const async = require('async');
const productService = require('./products.service');
const vendorCtrl = require('../vendors/vendors.controller');

const addNewProduct = function(newProduct, done) {
  productService.addNewProduct(newProduct, done);
}

const submitReview = function(productCode, reviewObj, done) {
	productService.submitNewReview(productCode, reviewObj, done);
}

const getProducts = function(done) {
  productService.getProducts(done);
}

const findProductByCode = function(productCode, done) {
	async.waterfall([
		productService.findProductByCode.bind(null, productCode),
		vendorCtrl.fetchVendorByCode
	], (err, result) => {
		console.log(result);
		done(null, result);
		return;
	});
}

module.exports = {
  addNewProduct,
  getProducts,
  submitReview,
  findProductByCode
}
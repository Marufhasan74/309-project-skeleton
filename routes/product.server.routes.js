module.exports = function(app){

 var product = require('./../controllers/product.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/product')
	.get(product.list)
	.post(users.requiresLogin, product.create);

  app.route('/api/product/:productId')
	.get(product.read)
  .delete(users.requiresLogin, product.delete);

	app.route('/api/product/edit/:articleId')
	.get(product.read)
	.put(users.requiresLogin,product.update);

app.route('/product/all').get(product.listView);
app.route('/product/new').get(product.createView);
app.route('/product/:productId').get(product.singleView);


app.param('productId', product.productByID);


}
let config = {
	MONGO: {
		// MONGO_URL: (process.env.MONGO_URL || 'mongodb://dbuser:dbuser@ds247027.mlab.com:47027/heroku_wvz07bnh')
		// MONGO_URL: (process.env.MONGO_URL || 'mongodb://admin:admin@ds143907.mlab.com:43907/tga')
		MONGO_URL: (process.env.MONGO_URL || 'mongodb://localhost:27017/products')
	}
}

module.exports = config;
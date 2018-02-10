// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

module.exports = {
 uri: 'mongodb://cfgalarpe:galarpe1003@ds231588.mlab.com:31588/meandb', // Databse URI and database name 
                                                                            //mongodb://localhost:27017/meandb
 secret: crypto, // Cryto-created secret
 db: 'meandb' // Database name
}

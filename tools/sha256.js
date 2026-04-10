const crypto = require('crypto');

const sha256 = crypto.createHash('sha256');
const data = process.argv[1];

console.log(sha256.update(data).digest('hex'));

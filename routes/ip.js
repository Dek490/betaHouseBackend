const crypt = require("crypto")

const k = crypt.randomBytes(32).toString("hex")
console.log(k)
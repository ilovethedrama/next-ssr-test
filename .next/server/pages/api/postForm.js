"use strict";
(() => {
var exports = {};
exports.id = 62;
exports.ids = [62];
exports.modules = {

/***/ 807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_postForm)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./src/lib/mongodb.ts

if (!process.env.MONGODB_URI) {
    throw new Error("Fam that 'MONGODB_URI' is mythical! It doesn't exist");
}
const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise;
if (!process.env.MONGODB_URI) {
    throw new Error("Please add the URI to your .env.local file");
}
if (false) {} else {
    client = new external_mongodb_namespaceObject.MongoClient(uri, options);
    console.log(client);
    clientPromise = client.connect();
}
/* harmony default export */ const mongodb = (clientPromise);

;// CONCATENATED MODULE: ./src/pages/api/postForm.ts

const postForm = async (req, res)=>{
    try {
        const client = await mongodb;
        const db = client.db("KYUK_Operations");
        const postForm = await db.collection("referrals").insertOne(req.body);
        res.json(postForm);
    } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        console.error(message);
        throw new Error(message);
    }
};
/* harmony default export */ const api_postForm = (postForm);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(807));
module.exports = __webpack_exports__;

})();
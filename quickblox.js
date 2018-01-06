'use strict';
// https://quickleft.com/blog/creating-and-publishing-a-node-js-module/
const QB = require('./quickblox.min.js');
module.exports = new QB.QuickBlox().__proto__;

//function A2QB() {
//    this.quickBlox = QB.QuickBlox();
//}

//A2QB.prototype.getQuickBlox = function () {
//    return this.quickBlox;
//};

//const qb = new QB.QuickBlox();
//console.log('QuickBlox version ' + qb.version + ' is loaded.');
//module.exports = qb.__proto__;

//module.exports = {
//    QuickBlox: function () {
//        return QB.QuickBlox();
//    }
//};

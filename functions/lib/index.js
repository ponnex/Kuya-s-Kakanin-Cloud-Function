"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
exports.orderBilling = functions.https.onRequest((request, response) => {
    console.log("orderBilling : " + JSON.stringify(request.query));
    const sapinsapinprice = 15;
    const bikoprice = 10;
    const empanadaprice = 8;
    const pastelprice = 20;
    const sapinsapinorder = request.query["sapinsapinorder"];
    const bikoorder = request.query["bikoorder"];
    const empanadaorder = request.query["empanadaorder"];
    const pastelorder = request.query["pastelorder"];
    const ifsapinsapin = `Sapin-sapin: ${sapinsapinprice} x ${sapinsapinorder} = ${sapinsapinprice * sapinsapinorder}\n`;
    const ifbiko = `Biko: ${bikoprice} x ${bikoorder} = ${bikoprice * bikoorder}\n`;
    const ifempanada = `Empanada: ${empanadaprice} x ${empanadaorder} = ${empanadaprice * empanadaorder}\n`;
    const ifpastel = `Empanada: ${pastelprice} x ${pastelorder} = ${pastelprice * pastelorder}\n`;
    const total = `Total: ${(sapinsapinprice * sapinsapinorder) + (bikoprice * bikoorder) + (empanadaprice * empanadaorder) + (pastelprice * pastelorder)}`;
    response.json({ "messages": [{ "text": `Sapin-sapin: ${ifsapinsapin} ${ifbiko} ${ifempanada} ${ifpastel} ${total}` }] });
});
//# sourceMappingURL=index.js.map
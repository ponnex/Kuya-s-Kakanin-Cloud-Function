import * as functions from 'firebase-functions';

export const orderBilling = functions.https.onRequest((request, response) => {
    console.log("orderBilling : " + JSON.stringify(request.query));

    const sapinsapinprice: number = 15;
    const bikoprice: number = 10;
    const empanadaprice: number = 8;
    const pastelprice: number = 20;

    const sapinsapinorder = request.query["sapinsapinorder"];
    const bikoorder = request.query["bikoorder"];
    const empanadaorder = request.query["empanadaorder"];
    const pastelorder = request.query["pastelorder"];

    const ifsapinsapin: string = `Sapin-sapin: ${sapinsapinprice} x ${sapinsapinorder} = ${sapinsapinprice * sapinsapinorder}\n`;
    const ifbiko: string = `Biko: ${bikoprice} x ${bikoorder} = ${bikoprice * bikoorder}\n`;
    const ifempanada: string = `Empanada: ${empanadaprice} x ${empanadaorder} = ${empanadaprice * empanadaorder}\n`;
    const ifpastel: string = `Empanada: ${pastelprice} x ${pastelorder} = ${pastelprice * pastelorder}\n`;
    const total: string = `Total: ${(sapinsapinprice * sapinsapinorder) + (bikoprice * bikoorder) + (empanadaprice * empanadaorder) + (pastelprice * pastelorder)}`

    response.json({ "messages": [ { "text": `Sapin-sapin: ${ifsapinsapin} ${ifbiko} ${ifempanada} ${ifpastel} ${total}` } ] });
});

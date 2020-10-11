const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();



exports.getShipment = functions.https.onRequest(async (request, response) => {
    if(!request.query.id){
        return response.send({
            type: "ERR",
            code: "ERR_NO_SHIPMENT_ID",
            data: request.query,
            message: "Please enter a shipment ID"
        });
    }
    const id = request.query.id;
    const shipmentsRef = db.collection('shipments').doc(id);
    shipmentsRef.get().then((doc)=>{
        if (!doc.exists) {
            return response.send({
                type: "ERR",
                code: "ERR_SHIPMENT_NOT_FOUND",
                data: id,
                message: "Could not find shipment given the ID"
            });
          } else {
            return response.send({
                type: "SUC",
                code: "SUC_SHIPMENT",
                data: doc.data(),
                message: "Found shipment!"
            });
          }
    });
});

exports.newShipment = functions.https.onRequest(async (request, response) => {
    if(!request.body){
        return response.send({
            type: "ERR",
            code: "ERR_NO_SHIPMENT_DATA",
            data: request.query,
            message: "Please enter all shipment data"
        });
    }
    const id = request.query.id;
    const shipmentsRef = db.collection('shipments').doc(id);
    shipmentsRef.get().then((doc)=>{
        if (!doc.exists) {
            return response.send({
                type: "ERR",
                code: "ERR_SHIPMENT_NOT_FOUND",
                data: id,
                message: "Could not find shipment given the ID"
            });
          } else {
            return response.send({
                type: "SUC",
                code: "SUC_SHIPMENT",
                data: doc.data(),
                message: "Found shipment!"
            });
          }
    });
});
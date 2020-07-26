const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const CONNECTION_URL = "mongodb+srv://app_v1_ecommerce:Murali@6@srls.4ux6v.mongodb.net/app_v1_ecommerce?retryWrites=true&w=majority";

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(CONNECTION_URL, { useUnifiedTopology: true }).then((client) => {
        console.log(`Connnected!`);
        _db = client.db();
        callback(client);
    }).catch(err => {
        console.log(err);
    });
};

const getDb = () => {

    if (_db) {
        return _db;
    }

    throw "No database found!";
}

exports.mongoConnect = mongoConnect;

exports.getDb = getDb;
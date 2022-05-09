const { MongoClient } = require('mongodb');


const client = new MongoClient(`mongodb+srv://Gruhith:${process.env.MONGO_PASS}@cluster0.yjw3t.mongodb.net/as4?retryWrites=true&w=majority`, {
  useUnifiedTopology: true,
});

let inventory; let
  counter;
client.connect((err, cl) => {
  const db = cl.db();
  inventory = db.collection('inventory');
  counter = db.collection('counter');
});

function getInventory() { return inventory; }
function getCounter() { return counter; }

module.exports = { getCounter, getInventory };

var firebase = require("firebase-admin");
var product = require('./seed_files/product.json');
var icdCodes = require('./seed_files/icd10cm_codes_2017.json');
var _ = require('lodash');
var uuid = require('node-uuid');

firebase.initializeApp({
  credential: firebase.credential.cert("firebase-key.json"),
  databaseURL: 'https://drugme-5e199.firebaseio.com'
});

firebase.database().ref('/product/').once('value').then(process);

function process(snap){
    var drugs = snap.val();
    _.map(drugs, get_scores)
}

function get_scores(product){
    var indications = _.get(product, 'indications');
    _.map(indications, function(indication){
        var id = indication.diagnosis_id;
        firebase.database().ref('/icdcodes/' + id + '/drugs/' + product.id).set(product.id);
    })
    firebase.database().ref('/product/' + product.id + '/total_score').set(avg_score, x => console.log(product.name + avg_score))
}

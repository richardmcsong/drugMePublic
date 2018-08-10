var firebase = require("firebase-admin");
var product = require('./seed_files/drug-label.json');
var icdCodes = require('./seed_files/icd10cm_codes_2017.json');
var indications = require('./seed_files/test_indications.json');
var _ = require('lodash');
var uuid = require('node-uuid');

firebase.initializeApp({
  credential: firebase.credential.cert("firebase-key.json"),
  databaseURL: 'https://drugme-5e199.firebaseio.com'
});
function clearDatabase() {
	return firebase.database().ref('/').set(null, () => console.log("database cleared."))
}
function clearProducts() {
	return firebase.database().ref('/product').set(null, () => console.log("products cleared."))
}
function clearIcdCodes() {
	return firebase.database().ref('/icdcodes/').set(null, () => console.log("icd codes cleared."))
}
function addProduct(val){
    return firebase.database().ref('/product/' + val.id).set(val, () => console.log('product seeded ' + val.brand_name))
}
function seedProducts() {
	if (product && typeof product == 'object' && product.constructor == Array)
    	return Promise.all(_.map(product, addProduct))
}
function addIndication(val) {
	return firebase.database().ref('/product/' + val.id + "/indications").set(val.indication, () => console.log('indications seeded ' + val.id))
}
function seedIndications() {
	if (indications && typeof indications == 'object' && indications.constructor == Array)
		return Promise.all(_.map(indications, addIndication))
}
function addIcd(val) {
	return firebase.database().ref('/icdcodes/' + val.code).set(val, () => console.log('seeded ' + val.code))
}
function seedIcd() {
	if (icdCodes && typeof icdCodes == 'object' && icdCodes.constructor == Array)
		return Promise.all(_.map(icdCodes, addIcd))
}
// clearDatabase()
// clearProducts()
// .then(seedProducts)
// // .then(seedIcd)
// // clearIcdCodes()
// // .then(seedIcd)
// // clearProducts()
// // .then(seedProducts)
seedIndications()
.then((x) => process.exit(0))

// var ref = firebase.database().ref('/product');

// ref.orderByChild("brand_name").startAt("Mevacor").endAt("Mevacor").on("child_added", (snapshot) => {
// 	console.log(snapshot.val());
// });

// var ref = firebase.database().ref('/icdcodes');
// ref.orderByChild("description").startAt("generalized anxiety disorder").endAt("generalized anxiety disorder").on("child_added", (snapshot) => {
// 	console.log(snapshot.val())
// })
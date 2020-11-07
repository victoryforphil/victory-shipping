
import Config from "./config"
import * as firebase from 'firebase';
firebase.initializeApp(Config);
firebase.analytics();

let db = firebase.firestore();

const exports = {
    firebase: firebase,
    db: db
}
export default exports;

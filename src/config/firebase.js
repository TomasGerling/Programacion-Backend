
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { serviceAccount } from "../../rupertKeys.json";



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: functions.config().firebase 
});
console.info('Firebase Connected');


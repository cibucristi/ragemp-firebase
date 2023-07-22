import { initializeApp } from "firebase-admin";
import { cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"

const serviceAccount = require('../../ragemp-firebase-firebase-adminsdk-962fj-f9e10b8171.json');

initializeApp({
    credential: cert(serviceAccount)
})

export const db = getFirestore()
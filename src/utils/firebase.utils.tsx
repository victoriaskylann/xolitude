import {initializeApp } from 'firebase/app'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALHgj0WjVyLbfoexMcFFr6zZM26aVlHQg",
    authDomain: "xolitude-photos.firebaseapp.com",
    projectId: "xolitude-photos",
    storageBucket: "xolitude-photos.appspot.com",
    messagingSenderId: "216278596480",
    appId: "1:216278596480:web:d8b188b61c0cd65fd7df65"
};
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export const db = getFirestore();

//could add authentication for people to see their past orders....

// still need to fully flesh this out
const createOrderAfterCheckout = async (orderId: string, price: number, item: string) => {
    const orderDocRef = doc(db, 'orders', orderId)

    const createdAt = new Date();
    try {
        await setDoc(orderDocRef, {
            orderId,
            price,
            createdAt,
            item,
        });
    } catch (error) {
        console.log('error creating order', error);
    }

    return orderDocRef;
}


// what do I want to do with the databse?
// keep track of orders
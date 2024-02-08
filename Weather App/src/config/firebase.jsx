import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore, collection,
    addDoc,
    getDocs
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0rJoaWftWPTYGzUko0WhVrQyghIgBsP0",
    authDomain: "weather-app-bee26.firebaseapp.com",
    projectId: "weather-app-bee26",
    storageBucket: "weather-app-bee26.appspot.com",
    messagingSenderId: "637165233427",
    appId: "1:637165233427:web:7650ec1ed0833cd919e6e6",
    measurementId: "G-YG3YP4829L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export async function addLocation(location) {
    try {
        const docRef = await addDoc(collection(db, "location"), {
            location
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

export async function getResult(id) {
    const querySnapshot = await getDocs(collection(db, "location"));
    
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  documentId,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAQ19_wq_NaWzST9Q6EQcLqhsYuouspH3U",
  authDomain: "project-borov-app.firebaseapp.com",
  projectId: "project-borov-app",
  storageBucket: "project-borov-app.appspot.com",
  messagingSenderId: "170593881142",
  appId: "1:170593881142:web:c06bf29f9ee4520713dc97",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Refactoring the fetching functions below
const itemsCollectionRef = collection(db, "items");

export async function getItems() {
  const snapshot = await getDocs(itemsCollectionRef);
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return items;
}

export async function getItem(id) {
  const docRef = doc(db, "items", id);
  const snapshot = await getDoc(docRef);
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}

export async function getHostItems() {
  const q = query(itemsCollectionRef, where("hostId", "==", "123"));
  const snapshot = await getDocs(q);
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return items;
}

/* 
This 👇 isn't normally something you'd need to do. Instead, you'd 
set up Firebase security rules so only the currently logged-in user 
could edit their vans.

https://firebase.google.com/docs/rules

I'm just leaving this here for educational purposes, as it took
me a while to find the `documentId()` function that allows you
to use a where() filter on a document's ID property. (Since normally
it only looks at the data() properties of the document, meaning you
can't do `where("id", "==", id))`

It also shows how you can chain together multiple `where` filter calls
*/

// export async function getHostVan(id) {
//     const q = query(
//         vansCollectionRef,
//         where(documentId(), "==", id),
//         where("hostId", "==", "123")
//     )
//     const snapshot = await getDocs(q)
//     const vans = snapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id
//     }))
//     return vans[0]
// }
export async function loginUser(creds) {
  try {
    const res = await fetch("/api/login", {
      method: "post",
      body: JSON.stringify(creds),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("Login endpoint not found");
      }
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Error logging in: ${error.message}`);
  }
}

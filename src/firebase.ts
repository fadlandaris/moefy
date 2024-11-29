import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {toast} from "react-toastify"

const firebaseConfig = {
  apiKey: "AIzaSyAdFi_LoFKZbLIOHQUi1438Katq44OBrHk",
  authDomain: "moevie.firebaseapp.com",
  projectId: "moevie",
  storageBucket: "moevie.firebasestorage.app",
  messagingSenderId: "712411751021",
  appId: "1:712411751021:web:599962565f6a500c199564"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name: string, email: string, password: string) => {
  try {
    const resp = await createUserWithEmailAndPassword(auth, email, password);
    const user = resp.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      authProvider: "local",
      email,
      name,
    });
  } catch (error) {
    let errorMessage = ""
    if (error instanceof Error) {
      errorMessage = error.message
    }
    toast.error(errorMessage.split('/')[1].split('-').join(' ').replace(')', '').replace('.', ''))
  }
};

const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    let errorMessage = ""
    if (error instanceof Error) {
      errorMessage = error.message
    }
    toast.error(errorMessage.split('/')[1].split('-').join(' ').replace(')', '').replace('.', ''))
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  login,
  signup,
  logout
};

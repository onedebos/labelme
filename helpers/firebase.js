import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

import {
  collection,
  getFirestore,
  getDocs,
  doc,
  getDoc,
  Timestamp,
  addDoc,
  query,
  orderBy,
  limit,
  setDoc,
} from "firebase/firestore";

import { formatFirebaseError } from "./helpers";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const db = getFirestore(app);

const updateUserProfile = async ({ user, displayName }) => {
  try {
    const res = await updateProfile(user, { displayName });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async ({
  email,
  password,
  displayName,
  brandName,
  phoneNo,
}) => {
  try {
    // sign up with E-mail and password
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // get user object
    const { user } = res;

    // update user's profile
    await updateUserProfile({ user, displayName });

    // send verification E-mail
    await sendEmailVerification(user);

    // take id to create user in User table
    const userRef = doc(db, "users", user.uid);

    await setDoc(
      userRef,
      {
        displayName,
        brandName,
        email,
        phoneNo,
      },
      { merge: true }
    );

    // onSucess
    return "success";
  } catch (error) {
    const { message, code } = error;

    console.log(code);
    if (code == "auth/email-already-in-use") {
      return formatFirebaseError(code);
    } else return "Something went wrong";
  }
};

const login = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    if (user.emailVerified) {
      return user;
    } else return "not verified";
    return user;
  } catch (e) {
    return false;
  }
};

const getCollection = async (key) => {
  // const q = collection(db, "/fx").orderBy("createdAt", "desc");
  // const q = query(collection(db, "fx"), orderBy("createdAt", "desc"), limit(1));
  const ratesRef = collection(db, "fx");
  const q = query(ratesRef, orderBy("createdAt", "desc"), limit(3));

  try {
    let rates = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      rates.push(doc.data());
    });
    return rates[0];
  } catch (error) {
    console.log(error);
  }
};

const isUserSignedIn = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // get signedIn user
      const uid = user.uid;
      // console.log(user);
      return uid;
    } else {
      return false;
    }
  });
};

const signOutUser = async () => {
  await signOut(auth);
};

const getUserById = async ({ id }) => {
  try {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.error(error);
  }
};

const convertToFirebaseDate = (d) => {
  const fbDate = Timestamp.fromDate(new Date(d));
  return fbDate;
};

export {
  login,
  isUserSignedIn,
  signOutUser,
  getCollection,
  getUserById,
  convertToFirebaseDate,
  registerUser,
};

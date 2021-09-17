/* eslint-disable prettier/prettier */
import firebase from "firebase/app";
import "firebase/auth";

export const LoginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

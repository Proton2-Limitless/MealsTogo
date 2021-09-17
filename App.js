import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import firebase from "firebase/app";
import "firebase/auth";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infastrucure/themes";
import { Navigation } from "./src/infastrucure/navigation";
import { AuthenticationContextProvider } from "./src/infastrucure/authentication/authentication.service";

const firebaseConfig = {
  apiKey: "AIzaSyDPd6HTaj0REKWS53JOLOn1c1ATUeM5gh0",
  authDomain: "mealstogo-52230.firebaseapp.com",
  projectId: "mealstogo-52230",
  storageBucket: "mealstogo-52230.appspot.com",
  messagingSenderId: "1028793006141",
  appId: "1:1028793006141:web:d10e82cec8d5acbe38d254",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

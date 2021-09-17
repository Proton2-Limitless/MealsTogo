/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../infastrucure/authentication/authentication.service";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setfavourites] = useState([]);

  const SaveFavourites = async (value, uid) => {
    try {
      const JsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, JsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const LoadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setfavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error Loading", e);
    }
  };

  const add = (restaurant) => {
    setfavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavoutites = favourites.filter((x) => {
      x.placeId !== restaurant.placeId;
    });
    setfavourites(newFavoutites);
  };

  useEffect(() => {
    if (user && user.uid) {
      LoadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      SaveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

/* eslint-disable prettier/prettier */
import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchterm) => {
  return new Promise((resolve, reject) => {
    const LocationMock = locations[searchterm];
    if (!LocationMock) {
      reject("Not Found");
    }
    resolve(LocationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResults = camelize(result);
  const { geometry = {} } = formattedResults.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};

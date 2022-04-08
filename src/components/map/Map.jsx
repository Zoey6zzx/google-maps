import React from "react";
import BingMapsReact from "bingmaps-react";

export function Map() {
  return (
    <BingMapsReact
      bingMapsKey="your bing maps API key goes here"
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="500px"
      viewOptions={{
        center: { latitude: 45.463664, longitude: 9.190750 },
        mapTypeId: "grayscale",
      }}
    />
  );
}
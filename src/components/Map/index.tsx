import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';

import Geolocation from 'react-native-geolocation-service';

import { Container, Maps } from './styles';

interface MapProps {
  handleMapSetLocation: (latitude: number, longitude: number) => void;
  longitudeValue: number;
  latitudeValue: number;
}

const Map: React.FC<MapProps> = ({
  handleMapSetLocation,
  longitudeValue,
  latitudeValue,
}: MapProps) => {
  const [loading, setLoading] = useState(true);

  const [coordinates, setCoordinates] = useState({
    latitude: -25.226179,
    longitude: -48.901178,
  });

  // useEffect(() => {
  //   const updatedCoordinates = {
  //     latitude: longitudeValue,
  //     longitude: latitudeValue,
  //   };

  //   setCoordinates(updatedCoordinates);
  // }, [longitudeValue]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordinates(coords);
        setLoading(false);
        handleMapSetLocation(coordinates.latitude, coordinates.longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
    );
  }, []);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Maps
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007,
          }}
        />
      )}
    </Container>
  );
};

export default Map;
